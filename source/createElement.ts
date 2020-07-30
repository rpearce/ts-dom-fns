export interface CreateElement {
  (type: string): HTMLElement
}

export const createElement: CreateElement = (type) =>
  document.createElement(type)
