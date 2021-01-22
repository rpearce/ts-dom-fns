export interface InsertAdjacentElement {
  (targetEl: Element, position: InsertPosition, el: Element): void
}

export const insertAdjacentElement: InsertAdjacentElement = (
  targetEl,
  position,
  el
) => {
  targetEl.insertAdjacentElement(position, el)
}
