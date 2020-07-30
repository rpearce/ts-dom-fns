export interface SetAttribute {
  (attr: string, value: string, el: HTMLElement): void
}

export const setAttribute: SetAttribute = (attr, value, el) =>
  el.setAttribute(attr, value)
