export interface GetStyle {
  (e: HTMLElement | SVGElement): CSSStyleDeclaration
}

export const getStyle: GetStyle = (el) => el.style
