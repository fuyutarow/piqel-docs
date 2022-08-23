
export const langs = [
  'CLI',
  'Rust',
  'Python',
  'JavaScript',
] as const

export type Langs = typeof langs[number]

export interface QueryResource {
  id: string
  url: string
  query: string
  result?: string
}