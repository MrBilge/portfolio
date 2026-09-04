export function blackhole(container: HTMLElement): () => void {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none";
  container.appendChild(canvas);
  const context = canvas.getContext("2d");
  if (!context) {
    canvas.remove();
    return () => {};
  }

  type Star = {
    orbital: number;
    radius: number;
    angle: number;
    speed: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
  };
  // Batch diamonds by opacity instead of saving and rotating the canvas per star.
  const groups: Star[][] = Array.from({ length: 8 }, () => []);
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let rafId = 0;
  let lastFrame = 0;
  let visible = false;
  let disposed = false;
  let collapse = false;
  let exploding = false;
  let finished = false;
  let stopTimeout: ReturnType<typeof setTimeout> | undefined;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function resize() {
    const nextWidth = container.clientWidth;
    const nextHeight = container.clientHeight;
    const nextRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    if (width === nextWidth && height === nextHeight && pixelRatio === nextRatio) return;
    width = nextWidth;
    height = nextHeight;
    pixelRatio = nextRatio;
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context!.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    groups.forEach((group) => { group.length = 0; });
    if (!width || !height) return;
    const maxOrbit = Math.max(50, Math.min(width, height) * 0.35);
    const count = width < 768 ? 600 : 1800;
    for (let i = 0; i < count; i++) {
      const orbital = 50 + Math.random() * (maxOrbit - 50);
      const opacity = Math.max(0, Math.min(1, 1 - orbital / 255));
      if (opacity === 0) continue;
      groups[Math.min(7, Math.floor(opacity * 8))].push({
        orbital, radius: orbital, angle: Math.random() * Math.PI * 2,
        speed: (Math.random() * 0.6 + 0.2) * 0.01,
        x: width / 2, y: height / 2, vx: 0, vy: 0,
      });
    }
  }

  function draw(step: number) {
    context!.clearRect(0, 0, width, height);
    const easing = 1 - Math.pow(0.95, step);
    const friction = Math.pow(0.98, step);
    groups.forEach((stars, index) => {
      context!.beginPath();
      for (const star of stars) {
        if (exploding) {
          star.x += star.vx * step;
          star.y += star.vy * step;
          star.vx *= friction;
          star.vy *= friction;
        } else {
          star.radius += (star.orbital * (collapse ? 2.9 : 1) - star.radius) * easing;
          star.angle += star.speed * step;
          star.x = width / 2 + Math.cos(star.angle) * star.radius;
          star.y = height / 2 + Math.sin(star.angle) * star.radius;
        }
        context!.moveTo(star.x, star.y - 1.13);
        context!.lineTo(star.x + 1.13, star.y);
        context!.lineTo(star.x, star.y + 1.13);
        context!.lineTo(star.x - 1.13, star.y);
        context!.closePath();
      }
      context!.fillStyle = `rgba(255,255,255,${(index + 0.5) / 8})`;
      context!.fill();
    });
  }

  function pause() {
    cancelAnimationFrame(rafId);
    rafId = 0;
    lastFrame = 0;
  }

  function loop(now: number) {
    rafId = 0;
    if (disposed || !visible || document.hidden || finished || reducedMotion.matches) return;
    // Keep the same orbital speed on 60 Hz and high-refresh-rate displays.
    const elapsed = lastFrame ? now - lastFrame : 1000 / 60;
    if (elapsed >= 1000 / 60 - 0.5) {
      draw(Math.min(elapsed / (1000 / 60), 2));
      lastFrame = now;
    }
    rafId = requestAnimationFrame(loop);
  }

  function sync() {
    pause();
    if (disposed || !visible || document.hidden || finished) return;
    resize();
    draw(0);
    if (!reducedMotion.matches) rafId = requestAnimationFrame(loop);
  }

  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  });
  intersectionObserver.observe(container);
  const resizeObserver = new ResizeObserver(() => {
    if (visible) sync();
  });
  resizeObserver.observe(container);
  document.addEventListener("visibilitychange", sync);
  reducedMotion.addEventListener("change", sync);

  const button = container.querySelector(".centerHover");
  const handleMouseEnter = () => { if (!exploding) collapse = true; };
  const handleMouseLeave = () => { collapse = false; };
  const handleClick = () => {
    if (exploding || reducedMotion.matches) return;
    exploding = true;
    collapse = false;
    groups.forEach((stars) => stars.forEach((star) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 10 + 6;
      star.vx = Math.cos(angle) * speed;
      star.vy = Math.sin(angle) * speed;
    }));
    stopTimeout = setTimeout(() => { finished = true; pause(); }, 1200);
  };
  button?.addEventListener("mouseenter", handleMouseEnter);
  button?.addEventListener("mouseleave", handleMouseLeave);
  button?.addEventListener("click", handleClick);

  return () => {
    disposed = true;
    pause();
    clearTimeout(stopTimeout);
    intersectionObserver.disconnect();
    resizeObserver.disconnect();
    document.removeEventListener("visibilitychange", sync);
    reducedMotion.removeEventListener("change", sync);
    button?.removeEventListener("mouseenter", handleMouseEnter);
    button?.removeEventListener("mouseleave", handleMouseLeave);
    button?.removeEventListener("click", handleClick);
    canvas.remove();
  };
}
