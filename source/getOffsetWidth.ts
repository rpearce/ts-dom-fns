export interface GetOffsetWidth {
  (el: HTMLElement): number
}


export const getOffsetWidth: GetOffsetWidth = (el) => el.offsetWidth
