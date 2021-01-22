export type PossibleElement = Element | null | undefined
export type PossibleHTMLElement = HTMLElement | null | undefined

export interface IsKey {
  (e: KeyboardEvent): boolean
}
