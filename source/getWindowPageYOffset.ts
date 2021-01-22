export interface GetWindowPageYOffset {
  (): number
}

export const getWindowPageYOffset: GetWindowPageYOffset = () =>
  window.pageYOffset
