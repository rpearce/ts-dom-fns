export interface RemoveEventListener {
  <A extends EventTarget, E extends Event>(
    type: string,
    handler: (this: A, evt: E) => void,
    el: A,
    useCapture?: boolean
  ): void
}

export const removeEventListener: RemoveEventListener = (
  type,
  handler,
  el,
  useCapture = false
) => {
  el.removeEventListener(type, handler as (e: Event) => void, useCapture)
}
