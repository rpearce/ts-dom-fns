import { removeAttribute } from './removeAttribute'

export interface RemoveDataAttributes {
  (el: HTMLElement | SVGElement): void
}

export const removeDataAttributes: RemoveDataAttributes = (el) => {
  for (const k in el.dataset) {
    removeAttribute(`data-${k}`, el)
  }
}
