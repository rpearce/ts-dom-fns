export interface GetStyle {
  (e: HTMLElement): CSSStyleDeclaration
}

export const getStyle: GetStyle = (el) => el.style
