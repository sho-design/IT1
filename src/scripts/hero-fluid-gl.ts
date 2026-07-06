// Real-time fluid simulation for the hero IV bag (stable-fluids on the GPU).
// The pointer stirs the liquid, a click drops a bloom of "ingredient", and on
// phones a gentle tilt sloshes it. Ink accumulates subtractively and slowly
// dissipates, so the bag reads as liquid, not particles.
//
// Returns false when WebGL2/float buffers are unavailable so the caller can
// fall back to the 2D canvas version.

interface FBO {
  fb: WebGLFramebuffer;
  tex: WebGLTexture;
  w: number;
  h: number;
  attach(unit: number): number;
}

interface DoubleFBO {
  read: FBO;
  write: FBO;
  swap(): void;
}

export function initHeroFluidGL(
  canvas: HTMLCanvasElement,
  interactionEl: HTMLElement,
  palette: string[]
): boolean {
  const gl = canvas.getContext('webgl2', {
    alpha: true,
    premultipliedAlpha: true,
    depth: false,
    stencil: false,
    antialias: false,
  }) as WebGL2RenderingContext | null;
  if (!gl) return false;
  if (!gl.getExtension('EXT_color_buffer_float')) return false;
  const linearOk = !!gl.getExtension('OES_texture_float_linear');
  const filtering = linearOk ? gl.LINEAR : gl.NEAREST;

  // ── Shaders ──────────────────────────────────────────────────────────
  const VERT = `#version 300 es
  precision highp float;
  in vec2 aPos;
  out vec2 vUv;
  void main () { vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }`;

  const FRAG_SPLAT = `#version 300 es
  precision highp float;
  in vec2 vUv; out vec4 o;
  uniform sampler2D uTarget;
  uniform vec2 uPoint; uniform vec3 uValue; uniform float uRadius; uniform float uAspect;
  void main () {
    vec2 p = vUv - uPoint; p.x *= uAspect;
    float a = exp(-dot(p, p) / uRadius);
    o = vec4(texture(uTarget, vUv).xyz + uValue * a, 1.0);
  }`;

  const FRAG_ADVECT = `#version 300 es
  precision highp float;
  in vec2 vUv; out vec4 o;
  uniform sampler2D uVelocity; uniform sampler2D uSource;
  uniform vec2 uTexel; uniform float uDt; uniform float uDissipation;
  void main () {
    vec2 coord = vUv - uDt * texture(uVelocity, vUv).xy * uTexel;
    o = uDissipation * texture(uSource, coord);
    o.a = 1.0;
  }`;

  const FRAG_DIVERGENCE = `#version 300 es
  precision highp float;
  in vec2 vUv; out vec4 o;
  uniform sampler2D uVelocity; uniform vec2 uTexel;
  void main () {
    float l = texture(uVelocity, vUv - vec2(uTexel.x, 0.0)).x;
    float r = texture(uVelocity, vUv + vec2(uTexel.x, 0.0)).x;
    float b = texture(uVelocity, vUv - vec2(0.0, uTexel.y)).y;
    float t = texture(uVelocity, vUv + vec2(0.0, uTexel.y)).y;
    vec2 c = texture(uVelocity, vUv).xy;
    // closed box: reflect at walls so liquid stays in the bag
    if (vUv.x - uTexel.x < 0.0) l = -c.x;
    if (vUv.x + uTexel.x > 1.0) r = -c.x;
    if (vUv.y - uTexel.y < 0.0) b = -c.y;
    if (vUv.y + uTexel.y > 1.0) t = -c.y;
    o = vec4(0.5 * (r - l + t - b), 0.0, 0.0, 1.0);
  }`;

  const FRAG_PRESSURE = `#version 300 es
  precision highp float;
  in vec2 vUv; out vec4 o;
  uniform sampler2D uPressure; uniform sampler2D uDivergence; uniform vec2 uTexel;
  void main () {
    float l = texture(uPressure, vUv - vec2(uTexel.x, 0.0)).x;
    float r = texture(uPressure, vUv + vec2(uTexel.x, 0.0)).x;
    float b = texture(uPressure, vUv - vec2(0.0, uTexel.y)).x;
    float t = texture(uPressure, vUv + vec2(0.0, uTexel.y)).x;
    float div = texture(uDivergence, vUv).x;
    o = vec4((l + r + b + t - div) * 0.25, 0.0, 0.0, 1.0);
  }`;

  const FRAG_GRADIENT = `#version 300 es
  precision highp float;
  in vec2 vUv; out vec4 o;
  uniform sampler2D uPressure; uniform sampler2D uVelocity; uniform vec2 uTexel;
  void main () {
    float l = texture(uPressure, vUv - vec2(uTexel.x, 0.0)).x;
    float r = texture(uPressure, vUv + vec2(uTexel.x, 0.0)).x;
    float b = texture(uPressure, vUv - vec2(0.0, uTexel.y)).x;
    float t = texture(uPressure, vUv + vec2(0.0, uTexel.y)).x;
    vec2 v = texture(uVelocity, vUv).xy - vec2(r - l, t - b);
    o = vec4(v, 0.0, 1.0);
  }`;

  const FRAG_FORCE = `#version 300 es
  precision highp float;
  in vec2 vUv; out vec4 o;
  uniform sampler2D uVelocity; uniform vec2 uForce; uniform float uDt;
  void main () {
    vec2 v = texture(uVelocity, vUv).xy + uForce * uDt;
    o = vec4(v * 0.999, 0.0, 1.0);
  }`;

  // Premultiplied output: ink colour with alpha = its strength. The canvas is
  // blended by CSS (multiply on light, screen on Night) like the 2D version.
  const FRAG_DISPLAY = `#version 300 es
  precision highp float;
  in vec2 vUv; out vec4 o;
  uniform sampler2D uDye;
  void main () {
    vec3 c = texture(uDye, vUv).rgb;
    float a = clamp(max(c.r, max(c.g, c.b)), 0.0, 1.0);
    // soften the top edge so ink fades near the fill line, like the 2D mask
    a *= smoothstep(1.0, 0.82, vUv.y);
    o = vec4(min(c, vec3(1.0)) * a / max(a, 1e-4) * a, a);
  }`;

  const compile = (type: number, src: string): WebGLShader | null => {
    const s = gl.createShader(type);
    if (!s) return null;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) return null;
    return s;
  };
  const vert = compile(gl.VERTEX_SHADER, VERT);
  if (!vert) return false;

  interface Program {
    prog: WebGLProgram;
    uniforms: Record<string, WebGLUniformLocation | null>;
  }
  const makeProgram = (fragSrc: string): Program | null => {
    const frag = compile(gl.FRAGMENT_SHADER, fragSrc);
    if (!frag) return null;
    const prog = gl.createProgram();
    if (!prog) return null;
    gl.attachShader(prog, vert);
    gl.attachShader(prog, frag);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
    const uniforms: Program['uniforms'] = {};
    const n = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS) as number;
    for (let i = 0; i < n; i++) {
      const info = gl.getActiveUniform(prog, i);
      if (info) uniforms[info.name] = gl.getUniformLocation(prog, info.name);
    }
    return { prog, uniforms };
  };

  const pSplat = makeProgram(FRAG_SPLAT);
  const pAdvect = makeProgram(FRAG_ADVECT);
  const pDiv = makeProgram(FRAG_DIVERGENCE);
  const pPress = makeProgram(FRAG_PRESSURE);
  const pGrad = makeProgram(FRAG_GRADIENT);
  const pForce = makeProgram(FRAG_FORCE);
  const pShow = makeProgram(FRAG_DISPLAY);
  if (!pSplat || !pAdvect || !pDiv || !pPress || !pGrad || !pForce || !pShow) return false;

  // Fullscreen quad
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  // ── Framebuffers ─────────────────────────────────────────────────────
  const makeFBO = (w: number, h: number, internal: number, format: number): FBO | null => {
    const tex = gl.createTexture();
    const fb = gl.createFramebuffer();
    if (!tex || !fb) return null;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filtering);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filtering);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, internal, w, h, 0, format, gl.HALF_FLOAT, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) return null;
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    return {
      fb, tex, w, h,
      attach(unit: number) {
        gl.activeTexture(gl.TEXTURE0 + unit);
        gl.bindTexture(gl.TEXTURE_2D, tex);
        return unit;
      },
    };
  };
  const makeDouble = (w: number, h: number, internal: number, format: number): DoubleFBO | null => {
    const a = makeFBO(w, h, internal, format);
    const b = makeFBO(w, h, internal, format);
    if (!a || !b) return null;
    const d: DoubleFBO = {
      read: a, write: b,
      swap() { const t = d.read; d.read = d.write; d.write = t; },
    };
    return d;
  };

  const SIM = 96, DYE = 256;
  let aspect = 1;
  let velocity: DoubleFBO, pressure: DoubleFBO, dye: DoubleFBO, divergence: FBO;
  let simW = SIM, simH = SIM, dyeW = DYE, dyeH = DYE;

  const alloc = (): boolean => {
    const rect = canvas.getBoundingClientRect();
    aspect = Math.max(0.4, rect.width / Math.max(1, rect.height));
    simW = SIM; simH = Math.round(SIM / aspect);
    dyeW = DYE; dyeH = Math.round(DYE / aspect);
    const v = makeDouble(simW, simH, gl.RG16F, gl.RG);
    const p = makeDouble(simW, simH, gl.R16F, gl.RED);
    const d = makeDouble(dyeW, dyeH, gl.RGBA16F, gl.RGBA);
    const dv = makeFBO(simW, simH, gl.R16F, gl.RED);
    if (!v || !p || !d || !dv) return false;
    velocity = v; pressure = p; dye = d; divergence = dv;
    return true;
  };

  const resizeCanvas = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
  };
  resizeCanvas();
  if (!alloc()) return false;

  const blit = (target: FBO | null) => {
    if (target) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, target.fb);
      gl.viewport(0, 0, target.w, target.h);
    } else {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  // ── Palette ──────────────────────────────────────────────────────────
  const hex2rgb = (hex: string): [number, number, number] => {
    const n = parseInt(hex.slice(1), 16);
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
  };
  const colors = palette.map(hex2rgb);
  let colorIdx = Math.floor(Math.random() * colors.length);
  const nextColor = (): [number, number, number] => {
    colorIdx = (colorIdx + 1 + Math.floor(Math.random() * (colors.length - 1))) % colors.length;
    return colors[colorIdx];
  };

  // ── Splats ───────────────────────────────────────────────────────────
  const splat = (x: number, y: number, dx: number, dy: number, color: [number, number, number], dyeAmt: number, radius: number) => {
    gl.useProgram(pSplat.prog);
    gl.uniform1f(pSplat.uniforms['uAspect'], aspect);
    gl.uniform1f(pSplat.uniforms['uRadius'], radius);
    gl.uniform2f(pSplat.uniforms['uPoint'], x, y);
    gl.uniform1i(pSplat.uniforms['uTarget'], velocity.read.attach(0));
    gl.uniform3f(pSplat.uniforms['uValue'], dx, dy, 0);
    blit(velocity.write);
    velocity.swap();
    if (dyeAmt > 0) {
      gl.uniform1i(pSplat.uniforms['uTarget'], dye.read.attach(0));
      gl.uniform3f(pSplat.uniforms['uValue'], color[0] * dyeAmt, color[1] * dyeAmt, color[2] * dyeAmt);
      blit(dye.write);
      dye.swap();
    }
  };

  // ── Interaction ──────────────────────────────────────────────────────
  let lastX = 0, lastY = 0, hasLast = false;
  const toUv = (e: PointerEvent): [number, number] => {
    const r = canvas.getBoundingClientRect();
    return [(e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height];
  };
  interactionEl.addEventListener('pointermove', (e) => {
    const [x, y] = toUv(e);
    if (x < -0.05 || x > 1.05 || y < -0.05 || y > 1.05) { hasLast = false; return; }
    if (hasLast) {
      const dx = (x - lastX) * 900;
      const dy = (y - lastY) * 900;
      // stir the liquid; a faint thread of the current colour follows the finger
      splat(x, y, dx, dy, colors[colorIdx], 0.045, 0.0016);
    }
    lastX = x; lastY = y; hasLast = true;
  }, { passive: true });
  interactionEl.addEventListener('pointerleave', () => { hasLast = false; });
  interactionEl.addEventListener('pointerdown', (e) => {
    const [x, y] = toUv(e);
    const c = nextColor();
    // a dropped "ingredient": a bloom with a soft upward push
    splat(x, y, 0, 90, c, 0.55, 0.004);
    splat(x, y, 0, 0, c, 0.3, 0.012);
  });

  // Tilt sloshes the liquid on phones.
  let tiltX = 0;
  if (typeof window.DeviceOrientationEvent !== 'undefined') {
    window.addEventListener('deviceorientation', (e) => {
      if (e.gamma != null) tiltX = Math.max(-1, Math.min(1, e.gamma / 30));
    }, { passive: true });
  }

  // ── Frame loop ───────────────────────────────────────────────────────
  const texelSim: [number, number] = [1 / simW, 1 / simH];
  let raf = 0;
  let last = performance.now();
  let ambientAt = 0;

  const step = (now: number) => {
    const dt = Math.min(0.033, (now - last) / 1000);
    last = now;

    // ambient life: a soft ingredient rises from the bottom port now and then
    if (now > ambientAt) {
      ambientAt = now + 1500 + Math.random() * 1800;
      const c = nextColor();
      splat(0.3 + Math.random() * 0.4, 0.02, (Math.random() - 0.5) * 40, 55 + Math.random() * 40, c, 0.32, 0.0035);
    }

    // gentle buoyancy plus tilt
    gl.useProgram(pForce.prog);
    gl.uniform1i(pForce.uniforms['uVelocity'], velocity.read.attach(0));
    gl.uniform2f(pForce.uniforms['uForce'], tiltX * 60, 6);
    gl.uniform1f(pForce.uniforms['uDt'], dt);
    blit(velocity.write);
    velocity.swap();

    // advect velocity then dye
    gl.useProgram(pAdvect.prog);
    gl.uniform2f(pAdvect.uniforms['uTexel'], texelSim[0], texelSim[1]);
    gl.uniform1f(pAdvect.uniforms['uDt'], dt * 60);
    gl.uniform1f(pAdvect.uniforms['uDissipation'], 0.999);
    gl.uniform1i(pAdvect.uniforms['uVelocity'], velocity.read.attach(0));
    gl.uniform1i(pAdvect.uniforms['uSource'], velocity.read.attach(0));
    blit(velocity.write);
    velocity.swap();
    gl.uniform1f(pAdvect.uniforms['uDissipation'], 0.9965);
    gl.uniform1i(pAdvect.uniforms['uVelocity'], velocity.read.attach(0));
    gl.uniform1i(pAdvect.uniforms['uSource'], dye.read.attach(1));
    blit(dye.write);
    dye.swap();

    // pressure projection
    gl.useProgram(pDiv.prog);
    gl.uniform2f(pDiv.uniforms['uTexel'], texelSim[0], texelSim[1]);
    gl.uniform1i(pDiv.uniforms['uVelocity'], velocity.read.attach(0));
    blit(divergence);
    gl.useProgram(pPress.prog);
    gl.uniform2f(pPress.uniforms['uTexel'], texelSim[0], texelSim[1]);
    gl.uniform1i(pPress.uniforms['uDivergence'], 1);
    divergence.attach(1);
    for (let i = 0; i < 18; i++) {
      gl.uniform1i(pPress.uniforms['uPressure'], pressure.read.attach(0));
      blit(pressure.write);
      pressure.swap();
    }
    gl.useProgram(pGrad.prog);
    gl.uniform2f(pGrad.uniforms['uTexel'], texelSim[0], texelSim[1]);
    gl.uniform1i(pGrad.uniforms['uPressure'], pressure.read.attach(0));
    gl.uniform1i(pGrad.uniforms['uVelocity'], velocity.read.attach(1));
    blit(velocity.write);
    velocity.swap();

    // draw
    gl.useProgram(pShow.prog);
    gl.uniform1i(pShow.uniforms['uDye'], dye.read.attach(0));
    blit(null);

    raf = requestAnimationFrame(step);
  };

  // seed: a few ingredients already blooming so it never starts empty
  for (let i = 0; i < 4; i++) {
    const c = nextColor();
    splat(0.2 + Math.random() * 0.6, 0.15 + Math.random() * 0.5, (Math.random() - 0.5) * 60, 30, c, 0.4, 0.005);
  }

  raf = requestAnimationFrame(step);

  window.addEventListener('resize', () => { resizeCanvas(); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(raf); raf = 0; }
    else if (!raf) { last = performance.now(); raf = requestAnimationFrame(step); }
  });

  return true;
}
