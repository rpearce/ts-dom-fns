import { PossibleHTMLElement } from './customTypes'

export interface Focus {
  (opts: { preventScroll: boolean }, el: PossibleHTMLElement): void
}

export const focus: Focus = (opts = { preventScroll: false }, el) => {
  el?.focus(opts)
}
