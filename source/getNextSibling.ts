export interface GetNextSibling {
  (target: Element): Node | null
}

export const getNextSibling: GetNextSibling = (el) => el.nextSibling
