export const cloneElement = <A extends Element>(
  deep = true,
  el: A
): A =>
  el.cloneNode(deep) as A
