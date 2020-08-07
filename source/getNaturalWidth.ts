export interface GetNaturalWidth {
  (el: HTMLImageElement): number
}


export const getNaturalWidth: GetNaturalWidth = (el) => el.naturalWidth
