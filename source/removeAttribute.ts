export interface RemoveAttribute {
  (attr: string, el: Element): void
}

export const removeAttribute: RemoveAttribute = (attr, el) => {
  el.removeAttribute(attr)
}
