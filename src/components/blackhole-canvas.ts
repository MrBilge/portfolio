export function blackhole(selector: string) {
  const container = document.querySelector(selector) as HTMLElement | null;
  if (!container) return;

  const h = container.offsetHeight;
  const w = container.offsetWidth;

const maxorbit = Math.min(w, h) * 0.35;
  const centery = h / 2;
  const centerx = w / 2;

  const startTime = Date.now();
  let currentTime = 0;
  let rafId = 0;

  const stars: Star[] = [];
  let collapse = false;
  let expanse = false;

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  canvas.style.pointerEvents = "none";
  container.appendChild(canvas);

  const context = canvas.getContext("2d");
  if (!context) return;

  /* 🔧 DPI OPTİMİZASYONU */
  const dpi = window.devicePixelRatio > 1.5 ? 144 : 96;
  canvas.width = w * (dpi / 96);
  canvas.height = h * (dpi / 96);
  context.scale(dpi / 96, dpi / 96);

  /* ⭐ STAR COUNT (MOBİL / DESKTOP) */
  const STAR_COUNT = w < 768 ? 600 : 4000;
   const INNER_RADIUS = 50
  class Star {
    orbital: number;
    currentOrbital: number;
    angle: number;
    speed: number;
    x: number;
    y: number;
    color: string;

    vx = 0;
    vy = 0;
    exploding = false;

    constructor() {
     this.orbital =
  INNER_RADIUS + Math.random() * (maxorbit - INNER_RADIUS);

      this.currentOrbital = this.orbital;

      this.angle = Math.random() * Math.PI * 2;
      this.speed = (Math.random() * 0.6 + 0.2) * 0.01;

      this.x = centerx;
      this.y = centery;

      this.color = `rgba(255,255,255,${1 - this.orbital / 255})`;

      stars.push(this);
    }

    draw() {
      if (this.exploding) {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.98;
        this.vy *= 0.98;
      } else {
        const target = collapse
          ? this.orbital * 2.9   // 🔹 SADECE %10 YAKLAŞMA
          : this.orbital;

        this.currentOrbital += (target - this.currentOrbital) * 0.05;
        this.angle += this.speed;

        this.x = centerx + Math.cos(this.angle) * this.currentOrbital;
        this.y = centery + Math.sin(this.angle) * this.currentOrbital;
      }
          if(context === null) return
      context.beginPath();
   context.save();
context.translate(this.x, this.y);
context.rotate(Math.PI / 4);
context.fillStyle = this.color;
context.fillRect(-0.8, -0.8, 1.6, 1.6);
context.restore();

      context.fill();
    }
  }
  
  const centerHover = container.querySelector(".centerHover") as HTMLElement;

  /* 🧲 HOVER */
  centerHover?.addEventListener("mouseover", () => {
    if (!expanse) collapse = true;
  });

  centerHover?.addEventListener("mouseout", () => {
    collapse = false;
  });

  /* 💥 CLICK → PATLAMA + STOP */
  centerHover?.addEventListener("click", () => {
    expanse = true;
    collapse = false;

    stars.forEach((s) => {
      const a = Math.random() * Math.PI * 2;
      const p = Math.random() * 10 + 6;
      s.vx = Math.cos(a) * p;
      s.vy = Math.sin(a) * p;
      s.exploding = true;
    });

    setTimeout(() => {
      cancelAnimationFrame(rafId);
    }, 1200);
  });

  function loop() {
    rafId = requestAnimationFrame(loop);
    currentTime = (Date.now() - startTime) / 50;
       if(context === null) return
    context.clearRect(0, 0, w, h);
    stars.forEach((s) => s.draw());
  }

  for (let i = 0; i < STAR_COUNT; i++) new Star();
  loop();
}
