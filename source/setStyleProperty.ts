export interface SetStyleProperty {
  (
    priority: 'important' | undefined | '',
    propertyName: string,
    value: string,
    el: HTMLElement
  ): void
}

export const setStyleProperty: SetStyleProperty = (
  priority,
  propertyName,
  value,
  el,
) => {
  el.style.setProperty(propertyName, value, priority)
}
