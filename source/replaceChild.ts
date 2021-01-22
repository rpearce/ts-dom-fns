export interface ReplaceChild {
  (parent: Element, oldChild: Element, newChild: Element): Element
}

export const replaceChild: ReplaceChild = (parent, oldChild, newChild) =>
  parent.replaceChild(newChild, oldChild)
