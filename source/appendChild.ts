export interface AppendChild {
  (child: Element, parent: Element): Element
}

export const appendChild: AppendChild = (child, parent) =>
  parent.appendChild(child)
