export interface Raf {
  (cb: () => void): number
}

export const raf: Raf = (cb) => window.requestAnimationFrame(cb)
