import { nanoid } from "nanoid"
import { Langs } from "../types"

export interface QueryResource {
  id: string
  url: string
  query: string
}

export const queryExamples: QueryResource[] = [
  {

    id: '1',
    url: 'https://api.github.com/repos/stedolan/jq/commits?per_page=5',
    query: `
SELECT parents.url, parents.html_url
`,
  },
  {
    id: '2',
    url: "https://registry.npmjs.org/-/v1/search?text=query",
    query: `
SELECT
  objects.package.name, 
  objects.searchScore AS score 
ORDERED BY score
`,
  },
]

export const toSome = (resource: QueryResource, type: Langs) => {
  if (type == 'CLI') {
    return toCLI(resource)
  } else if (type == 'Rust') {
    return toRust(resource)
  } else if (type == 'Python') {
    return toPython(resource)
  } else if (type == 'JavaScript') {
    return toNode(resource)
  }

}

const toCLI = (resource: QueryResource) => {
  const { url, query } = resource
  return `
    curl "${url}" | pq -q "
${query.trim()}
"
  `
}

const toRust = (resource: QueryResource) => {
  const { url, query } = resource
  return `
use piqel;
use reqwest;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let body = reqwest::get(
      "${url.trim()}"
    )
        .await?
        .json::<serde_json::Value>()
        .await?;
    let sql = r#"
${query.trim()}
    "#;

    let data = piqel::engine::evaluate(
      sql,
      &serde_json::to_string(&body).unwrap(),
      "json", "json"
    );

    Ok(())
}
  `
}

const toPython = (resource: QueryResource) => {
  const { url, query } = resource
  return `
import piqel as pq
import requests

r = requests.get(
  "${url}"
)
dl = pq.DataLake(r.json())
query = '''
${query.trim()}
'''
data = dl.query(query)
`
}

const toNode = (resource: QueryResource) => {
  const { url, query } = resource
  return `
import fetch from "node-fetch"
import { Pool } from 'piqel'

(async() => {
  const r = await fetch(
    "https://registry.npmjs.org/-/v1/search?text=query"
  )
  const d = await r.json()
  const pool = Pool.new(JSON.stringify(d))
  const dataStr = pool.query(\`
SELECT
  objects.package.name,
  objects.searchScore AS score 
ORDERED BY score
\`)()
`
}