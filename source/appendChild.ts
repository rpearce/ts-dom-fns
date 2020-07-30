export interface AppendChild {
  (child: HTMLElement, parent: HTMLElement): HTMLElement
}

export const appendChild: AppendChild = (child, parent) =>
  parent.appendChild(child)
