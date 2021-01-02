export interface CloneElement {
  <A extends { cloneNode: (deep?: boolean) => A }>(
    deep: boolean, el: A
  ): A
}

export const cloneElement: CloneElement = (deep = true, el) =>
  el.cloneNode(deep)
