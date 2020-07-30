export interface GetAttribute {
  (attr: string, el: HTMLElement): string | null
}

export const getAttribute: GetAttribute = (attr, el) => el.getAttribute(attr)
