import { getWindowInnerHeight } from './getWindowInnerHeight'
import { getWindowInnerWidth } from './getWindowInnerWidth'

export interface GetScaleToWindow {
  (height: number, width: number, offset: number): number
}

export const getScaleToWindow: GetScaleToWindow = (width, height, offset) => {
  const scaleX = getWindowInnerWidth() / (width + offset)
  const scaleY = getWindowInnerHeight() / (height + offset)

  return Math.min(scaleX, scaleY)
}
