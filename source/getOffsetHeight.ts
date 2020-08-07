export interface GetOffsetHeight {
  (el: HTMLElement): number
}


export const getOffsetHeight: GetOffsetHeight = (el) => el.offsetHeight
