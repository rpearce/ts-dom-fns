import { PossibleElement } from './customTypes'

export interface Blur {
  (el: PossibleElement): void
}

export const blur: Blur = (el) => {
  el?.blur()
}
