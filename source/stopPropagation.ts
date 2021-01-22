export interface StopPropagation {
  (e: Event): void
}

export const stopPropagation: StopPropagation = (e) => {
  e.stopPropagation()
}
