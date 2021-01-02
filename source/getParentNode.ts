export interface GetParentNode {
  (target: Element): (Node & ParentNode) | null
}

export const getParentNode: GetParentNode = (target) => target.parentNode
