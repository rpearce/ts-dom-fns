export interface GetNaturalHeight {
  (el: HTMLImageElement): number
}


export const getNaturalHeight: GetNaturalHeight = (el) => el.naturalHeight
