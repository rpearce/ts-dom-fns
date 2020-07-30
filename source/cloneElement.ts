export interface CloneElement {
  (deep: boolean, el: HTMLElement): HTMLElement
}

export const cloneElement: CloneElement = (deep = true, el) =>
  el.cloneNode(deep) as HTMLElement
