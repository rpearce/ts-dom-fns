export interface GetParentNode {
  (target: HTMLElement): (Node & ParentNode) | null
}

export const getParentNode: GetParentNode = (target) => target.parentNode
