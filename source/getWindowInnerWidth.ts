export interface GetWindowInnerWidth {
  (): number
}

export const getWindowInnerWidth: GetWindowInnerWidth = () =>
  window.innerWidth
