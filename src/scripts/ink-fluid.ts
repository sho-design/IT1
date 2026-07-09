// Live ink-in-water fluid, rendered to an offscreen canvas so another layer
// can sample it (e.g. composited into the hero headline via source-in). Real
// stable-fluids on the GPU: coloured ink in the brand palette marbling through
// near-white water. Returns the canvas to sample plus a stop() handle, or null
// when WebGL2/float buffers are unavailable.

export interface InkFluid {
  canvas: HTMLCanvasElement;
  stop: () => void;
  setPaused: (p: boolean) => void;
}

export function createInkFluid(opts?: { dark?: boolean }): InkFluid | null {
  const dark = !!opts?.dark;
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 360;
  const gl = canvas.getContext('webgl2', { alpha: false, antialias: false, preserveDrawingBuffer: true });
  if (!gl) return null;
  if (!gl.getExtension('EXT_color_buffer_float')) return null;
  const FILT = gl.getExtension('OES_texture_float_linear') ? gl.LINEAR : gl.NEAREST;

  const VERT = `#version 300 es
  precision highp float; in vec2 p; out vec2 uv;
  void main(){ uv=p*0.5+0.5; gl_Position=vec4(p,0.,1.); }`;
  const F = (s: string) => `#version 300 es\nprecision highp float;\nin vec2 uv;out vec4 o;\n` + s;
  const F_SPLAT = F(`uniform sampler2D t;uniform vec2 pt;uniform vec4 val;uniform float r;uniform float asp;
  void main(){vec2 d=uv-pt;d.x*=asp;float a=exp(-dot(d,d)/r);o=texture(t,uv)+val*a;}`);
  const F_ADV = F(`uniform sampler2D vel;uniform sampler2D src;uniform vec2 tx;uniform float dt;uniform float diss;
  void main(){vec2 c=uv-dt*texture(vel,uv).xy*tx;o=diss*texture(src,c);}`);
  const F_DIV = F(`uniform sampler2D vel;uniform vec2 tx;
  void main(){float l=texture(vel,uv-vec2(tx.x,0.)).x,r=texture(vel,uv+vec2(tx.x,0.)).x,b=texture(vel,uv-vec2(0.,tx.y)).y,t=texture(vel,uv+vec2(0.,tx.y)).y;vec2 c=texture(vel,uv).xy;if(uv.x-tx.x<0.)l=-c.x;if(uv.x+tx.x>1.)r=-c.x;if(uv.y-tx.y<0.)b=-c.y;if(uv.y+tx.y>1.)t=-c.y;o=vec4(.5*(r-l+t-b),0,0,1);}`);
  const F_PRS = F(`uniform sampler2D pr;uniform sampler2D dv;uniform vec2 tx;
  void main(){float l=texture(pr,uv-vec2(tx.x,0.)).x,r=texture(pr,uv+vec2(tx.x,0.)).x,b=texture(pr,uv-vec2(0.,tx.y)).x,t=texture(pr,uv+vec2(0.,tx.y)).x;o=vec4((l+r+b+t-texture(dv,uv).x)*.25,0,0,1);}`);
  const F_GRAD = F(`uniform sampler2D pr;uniform sampler2D vel;uniform vec2 tx;
  void main(){float l=texture(pr,uv-vec2(tx.x,0.)).x,r=texture(pr,uv+vec2(tx.x,0.)).x,b=texture(pr,uv-vec2(0.,tx.y)).x,t=texture(pr,uv+vec2(0.,tx.y)).x;vec2 v=texture(vel,uv).xy-vec2(r-l,t-b);o=vec4(v,0,1);}`);
  const F_FORCE = F(`uniform sampler2D vel;uniform float dt;uniform float tsec;
  vec2 curl(vec2 q){vec2 f=vec2(0.);for(int i=0;i<3;i++){float fi=float(i);vec2 ctr=vec2(.5+.32*sin(tsec*.13+fi*2.1),.5+.3*cos(tsec*.11+fi*1.7));vec2 d=q-ctr;float r=length(d)+1e-3;float w=(fi==1.?-1.:1.)*exp(-r*3.2)*40.;f+=vec2(-d.y,d.x)/r*w;}return f;}
  void main(){vec2 v=texture(vel,uv).xy;v+=curl(uv)*dt;v.y+=6.*dt;o=vec4(v*0.998,0,1);}`);
  // Output the coverage-weighted ink colour directly (not diluted toward
  // white), falling back to a readable mid tone in low-coverage gaps. `fb`
  // (the fallback/gap colour) is set per theme so the letters read either
  // as saturated mid tones on the light page or bright tints on the dark one.
  const F_SHOW = F(`uniform sampler2D dye;uniform vec3 fb;
  void main(){vec4 d=texture(dye,uv);float cov=clamp(d.a,0.,1.);vec3 ink=d.a>0.02?d.rgb/d.a:fb;o=vec4(mix(fb,ink,cov),1.);}`);

  const sh = (t: number, s: string) => {
    const o = gl.createShader(t)!; gl.shaderSource(o, s); gl.compileShader(o);
    if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(o) || 'shader');
    return o;
  };
  let vs: WebGLShader;
  try { vs = sh(gl.VERTEX_SHADER, VERT); } catch { return null; }
  const prog = (fs: string) => {
    const p = gl.createProgram()!; gl.attachShader(p, vs); gl.attachShader(p, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error('link');
    const u: Record<string, WebGLUniformLocation | null> = {};
    const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; i++) { const info = gl.getActiveUniform(p, i)!; u[info.name] = gl.getUniformLocation(p, info.name); }
    return { p, u };
  };
  let P: Record<string, { p: WebGLProgram; u: Record<string, WebGLUniformLocation | null> }>;
  try {
    P = { splat: prog(F_SPLAT), adv: prog(F_ADV), div: prog(F_DIV), prs: prog(F_PRS), grad: prog(F_GRAD), force: prog(F_FORCE), show: prog(F_SHOW) };
  } catch { return null; }

  const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  interface FBO { fb: WebGLFramebuffer; tex: WebGLTexture; w: number; h: number; at(u: number): number; }
  const fbo = (w: number, h: number, int: number, fmt: number): FBO => {
    const tex = gl.createTexture()!; gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, FILT); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, FILT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, int, w, h, 0, fmt, gl.HALF_FLOAT, null);
    const fb = gl.createFramebuffer()!; gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    gl.clearColor(0, 0, 0, 1); gl.clear(gl.COLOR_BUFFER_BIT);
    return { fb, tex, w, h, at(u) { gl.activeTexture(gl.TEXTURE0 + u); gl.bindTexture(gl.TEXTURE_2D, tex); return u; } };
  };
  const dbl = (w: number, h: number, int: number, fmt: number) => {
    let a = fbo(w, h, int, fmt), b = fbo(w, h, int, fmt);
    return { get r() { return a; }, get w() { return b; }, swap() { const t = a; a = b; b = t; } };
  };
  const SW = 180, SH = 101, DW = 512, DH = 288;
  const vel = dbl(SW, SH, gl.RG16F, gl.RG), prs = dbl(SW, SH, gl.R16F, gl.RED), dye = dbl(DW, DH, gl.RGBA16F, gl.RGBA), div = fbo(SW, SH, gl.R16F, gl.RED);
  const asp = SW / SH, tx: [number, number] = [1 / SW, 1 / SH];
  const blit = (t: FBO | null) => {
    if (t) { gl.bindFramebuffer(gl.FRAMEBUFFER, t.fb); gl.viewport(0, 0, t.w, t.h); }
    else { gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, canvas.width, canvas.height); }
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };
  // Light page: saturated mid-tone accents (readable dark-ish on white).
  // Dark page: the brighter "Night" accents (readable light on near-black).
  const INK_LIGHT = [[0.24, 0.36, 0.43], [0.55, 0.34, 0.47], [0.55, 0.23, 0.23], [0.20, 0.43, 0.46], [0.24, 0.30, 0.54]];
  const INK_DARK = [[0.52, 0.67, 0.76], [0.85, 0.68, 0.80], [0.90, 0.58, 0.44], [0.53, 0.73, 0.76], [0.60, 0.66, 0.90]];
  const INK = dark ? INK_DARK : INK_LIGHT;
  const FB = dark ? [0.70, 0.78, 0.86] : [0.31, 0.37, 0.43];
  const splat = (x: number, y: number, dx: number, dy: number, c: number[], amt: number, r: number) => {
    gl.useProgram(P.splat.p); gl.uniform1f(P.splat.u.asp, asp); gl.uniform1f(P.splat.u.r, r); gl.uniform2f(P.splat.u.pt, x, y);
    gl.uniform1i(P.splat.u.t, vel.r.at(0)); gl.uniform4f(P.splat.u.val, dx, dy, 0, 0); blit(vel.w); vel.swap();
    gl.uniform1i(P.splat.u.t, dye.r.at(0)); gl.uniform4f(P.splat.u.val, c[0] * amt, c[1] * amt, c[2] * amt, amt); blit(dye.w); dye.swap();
  };
  let T = 0, ci = 0;
  for (let i = 0; i < 14; i++) { const c = INK[i % INK.length]; splat(Math.random(), Math.random(), (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 80, c, 0.55, 0.007); }

  const step = (dt: number) => {
    T += dt;
    if (Math.random() < 0.75) { const c = INK[(ci++) % INK.length]; splat(0.05 + Math.random() * 0.9, 0.05 + Math.random() * 0.9, (Math.random() - 0.5) * 120, (Math.random() - 0.5) * 120, c, 0.55, 0.005 + Math.random() * 0.006); }
    gl.useProgram(P.force.p); gl.uniform1i(P.force.u.vel, vel.r.at(0)); gl.uniform1f(P.force.u.dt, dt); gl.uniform1f(P.force.u.tsec, T); blit(vel.w); vel.swap();
    gl.useProgram(P.adv.p); gl.uniform2f(P.adv.u.tx, tx[0], tx[1]); gl.uniform1f(P.adv.u.dt, dt * 60);
    gl.uniform1f(P.adv.u.diss, 0.999); gl.uniform1i(P.adv.u.vel, vel.r.at(0)); gl.uniform1i(P.adv.u.src, vel.r.at(0)); blit(vel.w); vel.swap();
    gl.uniform1f(P.adv.u.diss, 0.9975); gl.uniform1i(P.adv.u.vel, vel.r.at(0)); gl.uniform1i(P.adv.u.src, dye.r.at(1)); blit(dye.w); dye.swap();
    gl.useProgram(P.div.p); gl.uniform2f(P.div.u.tx, tx[0], tx[1]); gl.uniform1i(P.div.u.vel, vel.r.at(0)); blit(div);
    gl.useProgram(P.prs.p); gl.uniform2f(P.prs.u.tx, tx[0], tx[1]); gl.uniform1i(P.prs.u.dv, div.at(1));
    for (let i = 0; i < 18; i++) { gl.uniform1i(P.prs.u.pr, prs.r.at(0)); blit(prs.w); prs.swap(); }
    gl.useProgram(P.grad.p); gl.uniform2f(P.grad.u.tx, tx[0], tx[1]); gl.uniform1i(P.grad.u.pr, prs.r.at(0)); gl.uniform1i(P.grad.u.vel, vel.r.at(1)); blit(vel.w); vel.swap();
    gl.useProgram(P.show.p); gl.uniform1i(P.show.u.dye, dye.r.at(0)); gl.uniform3f(P.show.u.fb, FB[0], FB[1], FB[2]); blit(null);
  };

  // warm up so the letters are full of ink immediately (kept modest to avoid
  // a load-time hitch; the crossfade-in hides the last bit of settling)
  for (let i = 0; i < 70; i++) step(1 / 30);

  let raf = 0, paused = false, last = performance.now();
  const loop = () => {
    const now = performance.now();
    const dt = Math.min(0.033, (now - last) / 1000); last = now;
    step(dt);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  return {
    canvas,
    stop() { cancelAnimationFrame(raf); raf = 0; },
    setPaused(p: boolean) {
      if (p && raf) { cancelAnimationFrame(raf); raf = 0; }
      else if (!p && !raf) { last = performance.now(); raf = requestAnimationFrame(loop); }
    },
  };
}
