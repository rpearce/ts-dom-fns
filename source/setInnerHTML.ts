export interface SetInnerHTML {
  (el: Element, html: string): void
}

export const setInnerHTML: SetInnerHTML = (el, html) => {
  el.innerHTML = html
}
