export interface AddEventListener {
  <A extends EventTarget, E extends Event>(
    type: string,
    cb: (this: A, evt: E) => void,
    el: A,
    useCapture?: boolean
  ): void
}

export const addEventListener: AddEventListener = (
  type,
  cb,
  el,
  useCapture = false
) => {
  el.addEventListener(type, cb as (e: Event) => void, useCapture)
}
