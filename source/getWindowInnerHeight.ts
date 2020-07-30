export interface GetWindowInnerHeight {
  (): number
}

export const getWindowInnerHeight: GetWindowInnerHeight = () =>
  window.innerHeight
