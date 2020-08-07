export interface SetStyleProperty {
  (attr: string, value: string, el: HTMLElement): void
}

export const setStyleProperty: SetStyleProperty = (attr, value, el) => {
  el.style.setProperty(attr, value)
}
