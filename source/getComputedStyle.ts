export interface GetComputedStyle {
  (el: HTMLElement): CSSStyleDeclaration
}

export const getComputedStyle: GetComputedStyle = (el) =>
  window.getComputedStyle(el)
