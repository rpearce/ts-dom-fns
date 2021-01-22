export interface GetParentNode {
  (el: Element): (Node & ParentNode) | null
}

export const getParentNode: GetParentNode = (el) => el.parentNode
