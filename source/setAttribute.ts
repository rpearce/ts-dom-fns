export interface SetAttribute {
  (attr: string, value: string, el: Element): void
}

export const setAttribute: SetAttribute = (attr, value, el) =>
  el.setAttribute(attr, value)
