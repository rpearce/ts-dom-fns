export interface GetPreviousSibling {
  (target: Element): Node | null
}

export const getPreviousSibling: GetPreviousSibling = (el) => el.previousSibling
