export interface CreateElement {
  (type: string): Element
}

export const createElement: CreateElement = (type) =>
  document.createElement(type)
