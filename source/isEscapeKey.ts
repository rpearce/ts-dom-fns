import { IsKey } from './customTypes'

export const isEscapeKey: IsKey = (e) => e.key === 'Escape' || e.keyCode === 27
