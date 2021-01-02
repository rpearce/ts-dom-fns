import { PossibleHTMLElement } from './customTypes'

export interface Blur {
  (el: PossibleHTMLElement): void
}

export const blur: Blur = (el) => {
  el?.blur()
}
