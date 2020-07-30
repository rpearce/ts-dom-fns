import { PossibleElement } from './customTypes'

export interface Focus {
  (opts: { preventScroll: boolean }, el: PossibleElement): void
}

export const focus: Focus = (opts = { preventScroll: false }, el) => {
  el?.focus(opts)
}
