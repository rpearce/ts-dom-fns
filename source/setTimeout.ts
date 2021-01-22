export interface SetTimeout {
  (cb: () => void, delay: number): number
}

export const setTimeout: SetTimeout = (cb, delay) =>
  window.setTimeout(cb, delay)
