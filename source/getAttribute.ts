export interface GetAttribute {
  (attr: string, el: Element): string | null
}

export const getAttribute: GetAttribute = (attr, el) => el.getAttribute(attr)
