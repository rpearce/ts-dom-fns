export interface ForEachSibling {
  (handler: (el: HTMLElement) => void, target: HTMLElement): void
}

export const forEachSibling: ForEachSibling = (handler, target) => {
  const nodes = target.parentNode?.children || []

  for (let i = 0; i < nodes.length; i++) {
    const el = nodes[i] as HTMLElement

    if (!el) return

    handler(el)
  }
}
