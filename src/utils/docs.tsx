import { Langs } from "../types"

export interface DocTemplate {
  title: string
  links?: string[]
  exampleUrl?: string[]
}

const CLI: DocTemplate = {
  title: 'piqel',
  links: [
    "https://github.com/fuyutarow/piqel"
  ],
}

const Rust: DocTemplate = {
  title: 'piqel-rs',
  links: [
    "https://github.com/fuyutarow/piqel",
    'https://crates.io/crates/piqel',
  ],
  exampleUrl: [
    'https://github.com/fuyutarow/piqel/tree/alpha/examples/rust',
  ],
}
const Python: DocTemplate = {
  title: 'piqel-py',
  links: [
    'https://github.com/fuyutarow/piqel/tree/alpha/piqel-py',
    'https://pypi.org/project/piqel/',
  ],
  exampleUrl: [
    'https://github.com/fuyutarow/piqel/tree/alpha/examples/python',
  ],
}

const JavaScript: DocTemplate = {
  title: 'piqel-js',
  links: [
    'https://github.com/fuyutarow/piqel/tree/alpha/piqel-js',
    'https://www.npmjs.com/package/piqel',
  ],
  exampleUrl: [
    'https://github.com/fuyutarow/piqel/tree/alpha/examples/nodejs',
  ],
}

export const docs: Record<Langs, DocTemplate> = {
  CLI,
  Rust,
  Python,
  JavaScript,
}


