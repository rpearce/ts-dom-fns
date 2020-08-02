import { PossibleElement } from './customTypes'

type EmptyClientRect =
  { bottom: 0
  , height: 0
  , left: 0
  , right: 0
  , top: 0
  , width: 0
  , x: 0
  , y: 0
  }

export interface GetBoundingClientRect {
  (el: PossibleElement): ClientRect | EmptyClientRect
}

export const getBoundingClientRect: GetBoundingClientRect = (el) => {
  if (el) {
    return el.getBoundingClientRect()
  }

  return {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  }
}
