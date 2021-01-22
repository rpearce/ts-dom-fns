export interface GetWindowPageXOffset {
  (): number
}

export const getWindowPageXOffset: GetWindowPageXOffset = () =>
  window.pageXOffset
