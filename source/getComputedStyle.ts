export interface GetComputedStyle {
  (el: Element): CSSStyleDeclaration
}

export const getComputedStyle: GetComputedStyle = (el) =>
  window.getComputedStyle(el)
