import { getStyle } from './getStyle'

export interface GetStyleProperty {
  (attr: string, el: HTMLElement | SVGElement): string
}

export const getStyleProperty: GetStyleProperty = (attr, el) =>
  // any type because of https://github.com/Microsoft/TypeScript/issues/17827
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getStyle(el)[attr as any]
