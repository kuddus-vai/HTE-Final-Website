import React, { useRef, useEffect } from 'react';

// Types for component props
export interface HeroProps {
  trustBadge?: {
    text: string;
    icons?: string[];
  };
  headline?: {
    line1: string;
    line2: string;
  };
  subtitle?: string;
  buttons?: {
    primary?: {
      text: string;
      onClick?: () => void;
    };
    secondary?: {
      text: string;
      onClick?: () => void;
    };
  };
  className?: string;
  onOpenDemoModal?: () => void;
  onNavigate?: (page: any) => void;
  onScrollToSimulator?: () => void;
}

const defaultShaderSource = `#version 300 es
/*********
* made by Matthias Hurrle (@atzedent)
*
*	To explore strange new worlds, to seek out new life
*	and new civilizations, to boldly go where no man has
*	gone before.
*/
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)
// Returns a pseudo random number for a given point (white noise)
float rnd(vec2 p) {
  p=fract(p*vec2(12.9898,78.233));
  p+=dot(p,p+34.56);
  return fract(p.x*p.y);
}
// Returns a pseudo random number for a given point (value noise)
float noise(in vec2 p) {
  vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
  float
  a=rnd(i),
  b=rnd(i+vec2(1,0)),
  c=rnd(i+vec2(0,1)),
  d=rnd(i+1.);
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}
// Returns a pseudo random number for a given point (fractal noise)
float fbm(vec2 p) {
  float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
  for (int i=0; i<5; i++) {
    t+=a*noise(p);
    p*=2.*m;
    a*=.5;
  }
  return t;
}
float clouds(vec2 p) {
	float d=1., t=.0;
	for (float i=.0; i<3.; i++) {
		float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
		t=mix(t,d,a);
		d=a;
		p*=2./(i+1.);
	}
	return t;
}
void main(void) {
	vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
	vec3 col=vec3(0);
	float bg=clouds(vec2(st.x+T*.5,-st.y));
	uv*=1.-.3*(sin(T*.2)*.5+.5);
	for (float i=1.; i<12.; i++) {
		uv+=.1*cos(i*vec2(.1+.01*i, .8)+i*i+T*.5+.1*uv.x);
		vec2 p=uv;
		float d=length(p);
		col+=.00125/d*(cos(sin(i)*vec3(1,2,3))+1.);
		float b=noise(i+p+bg*1.731);
		col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
		col=mix(col,vec3(bg*.25,bg*.137,bg*.05),d);
	}
	O=vec4(col,1);
}`;

// Reusable Shader Background Hook
const useShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const pointersRef = useRef<PointerHandler | null>(null);

  // WebGL Renderer class
  class WebGLRenderer {
    private canvas: HTMLCanvasElement;
    private gl: WebGL2RenderingContext | null = null;
    private program: WebGLProgram | null = null;
    private vs: WebGLShader | null = null;
    private fs: WebGLShader | null = null;
    private buffer: WebGLBuffer | null = null;
    private scale: number;
    private shaderSource: string;
    private mouseMove = [0, 0];
    private mouseCoords = [0, 0];
    private pointerCoords = [0, 0];
    private nbrOfPointers = 0;

    private vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

    private vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

    constructor(canvas: HTMLCanvasElement, scale: number) {
      this.canvas = canvas;
      this.scale = scale;
      this.gl = canvas.getContext('webgl2');
      if (this.gl) {
        this.gl.viewport(0, 0, canvas.width * scale, canvas.height * scale);
      }
      this.shaderSource = defaultShaderSource;
    }

    isAvailable() {
      return !!this.gl;
    }

    updateShader(source: string) {
      this.reset();
      this.shaderSource = source;
      this.setup();
      this.init();
    }

    updateMove(deltas: number[]) {
      this.mouseMove = deltas;
    }

    updateMouse(coords: number[]) {
      this.mouseCoords = coords;
    }

    updatePointerCoords(coords: number[]) {
      this.pointerCoords = coords;
    }

    updatePointerCount(nbr: number) {
      this.nbrOfPointers = nbr;
    }

    updateScale(scale: number) {
      this.scale = scale;
      if (this.gl) {
        this.gl.viewport(0, 0, this.canvas.width * scale, this.canvas.height * scale);
      }
    }

    compile(shader: WebGLShader, source: string) {
      const gl = this.gl;
      if (!gl) return;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const error = gl.getShaderInfoLog(shader);
        console.error('Shader compilation error:', error);
      }
    }

    test(source: string) {
      const gl = this.gl;
      if (!gl) return null;
      let result = null;
      const shader = gl.createShader(gl.FRAGMENT_SHADER);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        result = gl.getShaderInfoLog(shader);
      }
      gl.deleteShader(shader);
      return result;
    }

    reset() {
      const gl = this.gl;
      if (!gl) return;
      if (this.program && !gl.getProgramParameter(this.program, gl.DELETE_STATUS)) {
        if (this.vs) {
          gl.detachShader(this.program, this.vs);
          gl.deleteShader(this.vs);
        }
        if (this.fs) {
          gl.detachShader(this.program, this.fs);
          gl.deleteShader(this.fs);
        }
        gl.deleteProgram(this.program);
      }
    }

    setup() {
      const gl = this.gl;
      if (!gl) return;
      this.vs = gl.createShader(gl.VERTEX_SHADER);
      this.fs = gl.createShader(gl.FRAGMENT_SHADER);
      if (!this.vs || !this.fs) return;

      this.compile(this.vs, this.vertexSrc);
      this.compile(this.fs, this.shaderSource);
      this.program = gl.createProgram();
      if (!this.program) return;

      gl.attachShader(this.program, this.vs);
      gl.attachShader(this.program, this.fs);
      gl.linkProgram(this.program);

      if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(this.program));
      }
    }

    init() {
      const gl = this.gl;
      if (!gl || !this.program) return;
      const program = this.program;
      
      this.buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

      const position = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      (program as any).resolution = gl.getUniformLocation(program, 'resolution');
      (program as any).time = gl.getUniformLocation(program, 'time');
      (program as any).move = gl.getUniformLocation(program, 'move');
      (program as any).touch = gl.getUniformLocation(program, 'touch');
      (program as any).pointerCount = gl.getUniformLocation(program, 'pointerCount');
      (program as any).pointers = gl.getUniformLocation(program, 'pointers');
    }

    render(now = 0) {
      const gl = this.gl;
      const program = this.program;
      
      if (!gl || !program || gl.getProgramParameter(program, gl.DELETE_STATUS)) return;

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      
      gl.uniform2f((program as any).resolution, this.canvas.width, this.canvas.height);
      gl.uniform1f((program as any).time, now * 1e-3);
      gl.uniform2f((program as any).move, this.mouseMove[0] ?? 0, this.mouseMove[1] ?? 0);
      gl.uniform2f((program as any).touch, this.mouseCoords[0] ?? 0, this.mouseCoords[1] ?? 0);
      gl.uniform1i((program as any).pointerCount, this.nbrOfPointers);
      gl.uniform2fv((program as any).pointers, this.pointerCoords);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  }

  // Pointer Handler class
  class PointerHandler {
    private scale: number;
    private active = false;
    private pointers = new Map<number, number[]>();
    private lastCoords = [0, 0];
    private moves = [0, 0];
    private cleanupListeners: () => void;

    constructor(element: HTMLCanvasElement, scale: number) {
      this.scale = scale;
      
      const map = (el: HTMLCanvasElement, sc: number, x: number, y: number) => 
        [x * sc, el.height - y * sc];

      const onPointerDown = (e: PointerEvent) => {
        this.active = true;
        this.pointers.set(e.pointerId, map(element, this.getScale(), e.clientX, e.clientY));
      };

      const onPointerUp = (e: PointerEvent) => {
        if (this.count === 1) {
          this.lastCoords = this.first;
        }
        this.pointers.delete(e.pointerId);
        this.active = this.pointers.size > 0;
      };

      const onPointerLeave = (e: PointerEvent) => {
        if (this.count === 1) {
          this.lastCoords = this.first;
        }
        this.pointers.delete(e.pointerId);
        this.active = this.pointers.size > 0;
      };

      const onPointerMove = (e: PointerEvent) => {
        if (!this.active) return;
        this.lastCoords = [e.clientX, e.clientY];
        this.pointers.set(e.pointerId, map(element, this.getScale(), e.clientX, e.clientY));
        this.moves = [this.moves[0] + e.movementX, this.moves[1] + e.movementY];
      };

      element.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointerup', onPointerUp);
      element.addEventListener('pointerleave', onPointerLeave);
      window.addEventListener('pointermove', onPointerMove);

      this.cleanupListeners = () => {
        element.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('pointerup', onPointerUp);
        element.removeEventListener('pointerleave', onPointerLeave);
        window.removeEventListener('pointermove', onPointerMove);
      };
    }

    destroy() {
      if (this.cleanupListeners) {
        this.cleanupListeners();
      }
    }

    getScale() {
      return this.scale;
    }

    updateScale(scale: number) {
      this.scale = scale;
    }

    get count() {
      return this.pointers.size;
    }

    get move() {
      return this.moves;
    }

    get coords() {
      return this.pointers.size > 0 
        ? Array.from(this.pointers.values()).flat() 
        : [0, 0];
    }

    get first() {
      return this.pointers.values().next().value || this.lastCoords;
    }
  }

  const resize = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
    
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    
    if (rendererRef.current) {
      rendererRef.current.updateScale(dpr);
    }
  };

  const loop = (now: number) => {
    if (!rendererRef.current || !pointersRef.current) return;
    
    rendererRef.current.updateMouse(pointersRef.current.first);
    rendererRef.current.updatePointerCount(pointersRef.current.count);
    rendererRef.current.updatePointerCoords(pointersRef.current.coords);
    rendererRef.current.updateMove(pointersRef.current.move);
    rendererRef.current.render(now);
    animationFrameRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
    
    const renderer = new WebGLRenderer(canvas, dpr);
    if (!renderer.isAvailable()) {
      return;
    }

    rendererRef.current = renderer;
    pointersRef.current = new PointerHandler(canvas, dpr);
    
    renderer.setup();
    renderer.init();
    
    resize();
    
    if (renderer.test(defaultShaderSource) === null) {
      renderer.updateShader(defaultShaderSource);
    }
    
    loop(0);
    
    window.addEventListener('resize', resize);
    
    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (pointersRef.current) {
        pointersRef.current.destroy();
      }
      if (rendererRef.current) {
        rendererRef.current.reset();
      }
    };
  }, []);

  return canvasRef;
};

// Reusable Hero Component
export const Hero: React.FC<HeroProps> = ({
  trustBadge = {
    text: "Enterprise Autonomous AI & Modern Web Architecture",
    icons: ["⚡", "★", "✦"]
  },
  headline = {
    line1: "Autonomous Systems.",
    line2: "Unrivaled Speed."
  },
  subtitle = "High-Tech Enterprise designs award-winning web platforms, intelligent WhatsApp business automation, and real-time cloud POS software engineered for scale.",
  buttons,
  className = "",
  onOpenDemoModal,
  onNavigate
}) => {
  const canvasRef = useShaderBackground();

  // Smart defaults for buttons if not provided
  const resolvedButtons = buttons || {
    primary: {
      text: "Explore Live Demos",
      onClick: () => {
        if (onNavigate) {
          onNavigate('portfolio');
        } else {
          const el = document.getElementById('portfolio');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    secondary: {
      text: "Free Architecture Consultation",
      onClick: () => {
        if (onOpenDemoModal) {
          onOpenDemoModal();
        }
      }
    }
  };

  return (
    <div className={`relative w-full min-h-[92vh] lg:min-h-screen overflow-hidden bg-black flex items-center justify-center ${className}`}>
      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover touch-none pointer-events-auto"
        style={{ background: 'black' }}
      />
      
      {/* Hero Content Overlay */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-white pointer-events-none py-16 px-4">
        {/* Trust Badge */}
        {trustBadge && (
          <div className="mb-6 animate-fade-in-down pointer-events-auto">
            <div className="flex items-center gap-2 px-5 py-2 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-full text-xs font-mono text-zinc-300 shadow-lg">
              {trustBadge.icons && (
                <div className="flex items-center gap-1 text-zinc-400">
                  {trustBadge.icons.map((icon, index) => (
                    <span key={index} className="text-zinc-300">
                      {icon}
                    </span>
                  ))}
                </div>
              )}
              <span className="text-zinc-300 tracking-wide font-sans text-xs sm:text-sm">{trustBadge.text}</span>
            </div>
          </div>
        )}

        <div className="text-center space-y-6 max-w-5xl mx-auto px-4 pointer-events-auto">
          {/* Main Heading with Animation */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight bg-gradient-to-b from-white via-white to-zinc-300 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
              {headline.line1}
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight bg-gradient-to-r from-zinc-100 via-zinc-200 to-[#FF9E40] bg-clip-text text-transparent animate-fade-in-up animation-delay-400">
              {headline.line2}
            </h1>
          </div>
          
          {/* Subtitle with Animation */}
          <div className="max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>
          
          {/* CTA Buttons with Animation */}
          {resolvedButtons && (
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center mt-8 animate-fade-in-up animation-delay-800">
              {resolvedButtons.primary && (
                <button 
                  onClick={resolvedButtons.primary.onClick}
                  className="px-8 py-3.5 bg-white text-zinc-950 hover:bg-zinc-200 rounded-full font-bold text-sm sm:text-base transition-all duration-200 hover:scale-105 shadow-xl cursor-pointer active:scale-95"
                >
                  {resolvedButtons.primary.text}
                </button>
              )}
              {resolvedButtons.secondary && (
                <button 
                  onClick={resolvedButtons.secondary.onClick}
                  className="px-7 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/30 text-white rounded-full font-semibold text-sm sm:text-base transition-all duration-200 backdrop-blur-sm cursor-pointer active:scale-95"
                >
                  {resolvedButtons.secondary.text}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
