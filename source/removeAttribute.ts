export interface RemoveAttribute {
  (attr: string, el: HTMLElement): void
}

export const removeAttribute: RemoveAttribute = (attr, el) => {
  el.removeAttribute(attr)
}
