import { getStyle } from './getStyle'

export interface SetStyleProperty {
  (attr: string, value: string, el: HTMLElement): void
}

export const setStyleProperty: SetStyleProperty = (attr, value, el) => {
  // any type because of https://github.com/Microsoft/TypeScript/issues/17827
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getStyle(el)[attr as any] = value
}
