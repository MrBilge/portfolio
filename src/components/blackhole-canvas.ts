export function blackhole(selector: string) {
  const container = document.querySelector(selector) as HTMLElement | null;
  if (!container) return;

  const w = container.offsetWidth;
  const h = container.offsetHeight;

  const centerx = w / 2;
  const centery = h / 2;
  const maxorbit = Math.min(w, h) * 0.35;

  let rafId = 0;
  const stars: Star[] = [];
  let collapse = false;
  let expanse = false;

  /* 🖼️ CANVAS */
  const canvas = document.createElement("canvas");
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  canvas.style.pointerEvents = "none";
  canvas.style.display = "block";
  container.appendChild(canvas);

  /* 🔧 DPI (EN KRİTİK KISIM) */
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  canvas.width = Math.floor(w * dpr);
  canvas.height = Math.floor(h * dpr);

  const context = canvas.getContext("2d");
  if (!context) return;

  context.scale(dpr, dpr);

  /* ⭐ AYARLAR */
  const STAR_COUNT = w < 768 ? 600 : 4000;
  const INNER_RADIUS = 80;

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

      this.color = `rgba(255,255,255,${1 - this.orbital / maxorbit})`;
      stars.push(this);
    }

    draw() {
      if (this.exploding) {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.98;
        this.vy *= 0.98;
        return;
      }

      const target = collapse
        ? this.orbital * 0.9 // 🔹 hover’da %10 yaklaşma
        : this.orbital;

      this.currentOrbital += (target - this.currentOrbital) * 0.06;
      this.angle += this.speed;

      this.x = centerx + Math.cos(this.angle) * this.currentOrbital;
      this.y = centery + Math.sin(this.angle) * this.currentOrbital;
       if(context=== null) return;
      context.save();
      context.translate(this.x, this.y);
      context.rotate(Math.PI / 4);
      context.fillStyle = this.color;
      context.fillRect(-1, -1, 2, 2); // ⭐ biraz daha kalın yıldız
      context.restore();
    }
  }

  /* 🎯 EVENTS */
  const centerHover = container.querySelector(".centerHover") as HTMLElement;

  centerHover?.addEventListener("mouseover", () => {
    if (!expanse) collapse = true;
  });

  centerHover?.addEventListener("mouseout", () => {
    collapse = false;
  });

  centerHover?.addEventListener("click", () => {
    expanse = true;
    collapse = false;

    stars.forEach((s) => {
      const a = Math.random() * Math.PI * 2;
      const p = Math.random() * 8 + 4;
      s.vx = Math.cos(a) * p;
      s.vy = Math.sin(a) * p;
      s.exploding = true;
    });

    setTimeout(() => cancelAnimationFrame(rafId), 1200);
  });

  /* 🔄 LOOP */
  function loop() {
    rafId = requestAnimationFrame(loop);
     if(context=== null) return;
    context.clearRect(0, 0, w, h);
    stars.forEach((s) => s.draw());
  }

  for (let i = 0; i < STAR_COUNT; i++) new Star();
  loop();
}
