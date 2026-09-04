const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const path = require("node:path");

test("canvas pauses offscreen, resumes safely and cleans up without removing the button", () => {
  const frames = new Map();
  const observers = [];
  const visibilityListeners = new Map();
  const buttonListeners = new Map();
  let nextFrame = 0;
  let fills = 0;
  let removed = false;
  const context = new Proxy({}, { get: (_, name) => name === "fill" ? () => fills++ : () => {} });
  const canvas = { style: {}, setAttribute() {}, getContext: () => context, remove() { removed = true; } };
  const button = {
    addEventListener: (name, fn) => buttonListeners.set(name, fn),
    removeEventListener: (name) => buttonListeners.delete(name),
  };
  const container = { clientWidth: 1000, clientHeight: 700, appendChild() {}, querySelector: () => button };
  const preference = { matches: false, addEventListener() {}, removeEventListener() {} };
  class Observer {
    constructor(callback) { this.callback = callback; observers.push(this); }
    observe() {}
    disconnect() { this.disconnected = true; }
  }
  const document = {
    hidden: false,
    createElement: () => canvas,
    addEventListener: (name, fn) => visibilityListeners.set(name, fn),
    removeEventListener: (name) => visibilityListeners.delete(name),
  };
  const source = fs.readFileSync(path.join(__dirname, "../src/components/blackhole-canvas.ts"), "utf8");
  const sandbox = {
    exports: {}, document,
    window: { devicePixelRatio: 2, matchMedia: () => preference },
    IntersectionObserver: Observer, ResizeObserver: Observer,
    requestAnimationFrame: (fn) => { frames.set(++nextFrame, fn); return nextFrame; },
    cancelAnimationFrame: (id) => frames.delete(id), setTimeout, clearTimeout,
  };
  vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, sandbox);
  const dispose = sandbox.exports.blackhole(container);
  const intersect = observers[0].callback;
  assert.equal(frames.size, 0, "no animation while offscreen");
  assert.equal(fills, 0, "no initial offscreen drawing");
  intersect([{ isIntersecting: true }]);
  assert.equal(frames.size, 1);
  assert.equal(fills, 8, "only eight batched fills per frame");
  assert.equal(canvas.width, 1500, "pixel ratio is capped");
  intersect([{ isIntersecting: true }]);
  assert.equal(frames.size, 1, "repeated visibility events never duplicate the loop");
  intersect([{ isIntersecting: false }]);
  assert.equal(frames.size, 0);
  intersect([{ isIntersecting: true }]);
  document.hidden = true;
  visibilityListeners.get("visibilitychange")();
  assert.equal(frames.size, 0, "background tabs stop animating");
  document.hidden = false;
  visibilityListeners.get("visibilitychange")();
  assert.equal(frames.size, 1);
  preference.matches = true;
  visibilityListeners.get("visibilitychange")();
  assert.equal(frames.size, 0, "reduced motion renders without an animation loop");
  dispose();
  assert.equal(removed, true);
  assert.equal(container.querySelector(), button);
  assert.equal(buttonListeners.size, 0);
  assert.equal(visibilityListeners.size, 0);
  assert.ok(observers.every((observer) => observer.disconnected));
  intersect([{ isIntersecting: true }]);
  assert.equal(frames.size, 0, "late observer callbacks cannot restart a disposed animation");
});
