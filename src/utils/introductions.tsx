import { QueryResource } from "../types";

export const codeIntro: {
  script: string,
  result: string,
}[] = [
    {
      script: `
cat Cargo.toml | pq
`,
      result: `
[package]
edition = "2021"
name = "piqel-exampels-rust"
version = "0.1.0"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
anyhow = "1.0.62"
json = "0.12.4"
piqel = "0.202107.4"
reqwest = { version = "0.11.11", features = ["json"] }
serde_json = "1.0.85"
tokio = {version = "1.20.1", features = ["full"]}
`
    },
    {
      script: `
cat Cargo.toml | pq -t json
`,
      result: `
{
  "package": {
    "edition": "2021",
    "name": "piqel-exampels-rust",
    "version": "0.1.0"
  },
  "dependencies": {
    "anyhow": "1.0.62",
    "json": "0.12.4",
    "piqel": "0.202107.4",
    "reqwest": {
      "version": "0.11.11",
      "features": [
        "json"
      ]
    },
    "serde_json": "1.0.85",
    "tokio": {
      "version": "1.20.1",
      "features": [
        "full"
      ]
    }
  }
}
`
    },
    {
      script: `
cat Cargo.toml | pq -t json | pq -t yaml
`,
      result: `
package:
  edition: "2021"
  name: piqel-exampels-rust
  version: 0.1.0
dependencies:
  anyhow: 1.0.62
  json: 0.12.4
  piqel: 0.202107.4
  reqwest:
    version: 0.11.11
    features:
      - json
  serde_json: 1.0.85
  tokio:
    version: 1.20.1
    features:
      - full


`
    },
  ]