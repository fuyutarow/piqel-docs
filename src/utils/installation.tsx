import { Langs } from "src/types";

export const installation: Record<Langs, {
  label: string,
  description?: string,
  script: string,
}[]> = {
  'CLI': [
    {
      label: 'Homebrew',
      description: 'for macOS',
      script: `brew install fuyutarow/tap/piqel`,
    },
    {
      label: 'scoop',
      description: 'for Windows',
      script: `
scoop bucket add fuyutarow https://github.com/fuyutarow/homebrew-tap.git
scoop install pq
    `
    }
  ],
  'Rust': [
    {
      label: 'cargo',
      description: 'with cargo-edit',
      script: `cargo add piqel`,
    }
  ],
  'Python': [
    {
      label: 'pip',
      script: `pip install piqel`,
    },
    {
      label: 'poetry',
      script: `poetry add piqel`,
    },
  ],
  'JavaScript': [
    {
      label: 'npm',
      script: `npm add piqel`,
    },
    {
      label: 'yarn',
      script: `yarn add piqel`,
    },
    {
      label: 'pnpm',
      script: `pnpm add piqel`,
    },
  ],
}