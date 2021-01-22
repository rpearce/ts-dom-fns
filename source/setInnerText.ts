export interface SetInnerText {
  (el: HTMLElement, text: string): void
}

export const setInnerText: SetInnerText = (el, text) => {
  el.innerText = text
}
