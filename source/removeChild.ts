export interface RemoveChild {
  (child: HTMLElement, parent: HTMLElement): void
}

export const removeChild: RemoveChild = (child, parent) => {
  if (parent.contains(child)) {
    parent.removeChild(child)
  }
}
