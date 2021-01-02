export interface RemoveChild {
  (child: Element, parent: Element): void
}

export const removeChild: RemoveChild = (child, parent) => {
  if (parent.contains(child)) {
    parent.removeChild(child)
  }
}
