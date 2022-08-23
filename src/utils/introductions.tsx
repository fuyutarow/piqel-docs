import { QueryResource } from "../types";

export const hackernewsResouce: QueryResource = {
  id: 'hackernews',
  url: "https://node-hnapi.herokuapp.com/news",
  query: `
SELECT
  title
`,
  //   points,
  //   url
  // ORDER BY points DESC LIMIT 5
}

export const codeIntro: {
  description?: string,
  script: string,
  result?: string,
}[] = [
    {
      description: "piqel has syntax highlighting",
      script: `
cat Cargo.toml | pq
`,
      result: `
[package]
edition = "2021"
name = "piqel-exampels-rust"
version = "0.1.0"

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
      description: "piqel can convert files, from toml to json",
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
      description: "piqel can convert json, yaml, toml, xml if you want",
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
    {
      description: `Try the following command in your terminal.`,
      script: `
curl "https://node-hnapi.herokuapp.com/news" | pq -t csv > hs.csv && cat hs.csv | pq -f csv -t json | pq
`,
    },
  ]