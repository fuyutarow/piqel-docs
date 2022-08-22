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
    url: "https://registry.npmjs.org/-/v1/search?text=aptos",
    query: "SELECT objects.package.name, objects.searchScore as score ORDERED BY score",
  },
  {
    id: '2',
    url: "https://registry.npmjs.org/-/v1/search?text=aptos",
    query: "SELECT objects.package.name, objects.searchScore as score ORDERED BY score",
  },
  {
    id: '3',
    url: "https://registry.npmjs.org/-/v1/search?text=aptos",
    query: "SELECT objects.package.name, objects.searchScore as score ORDERED BY score",
  },
  {
    id: nanoid(),
    url: "https://registry.npmjs.org/-/v1/search?text=aptos",
    query: "SELECT objects.package.name, objects.searchScore as score ORDERED BY score",
  },
  {
    id: nanoid(),
    url: "https://registry.npmjs.org/-/v1/search?text=aptos",
    query: "SELECT objects.package.name, objects.searchScore as score ORDERED BY score",
  },
  {
    id: nanoid(),
    url: "https://registry.npmjs.org/-/v1/search?text=aptos",
    query: "SELECT objects.package.name, objects.searchScore as score ORDERED BY score",
  },
  {
    id: nanoid(),
    url: "https://registry.npmjs.org/-/v1/search?text=aptos",
    query: "SELECT objects.package.name, objects.searchScore as score ORDERED BY score",
  },
  {
    id: nanoid(),
    url: "https://registry.npmjs.org/-/v1/search?text=aptos",
    query: "SELECT objects.package.name, objects.searchScore as score ORDERED BY score",
  },
  {
    id: nanoid(),
    url: "https://registry.npmjs.org/-/v1/search?text=aptos",
    query: "SELECT objects.package.name, objects.searchScore as score ORDERED BY score",
  },
  {
    id: nanoid(),
    url: "https://registry.npmjs.org/-/v1/search?text=aptos",
    query: "SELECT objects.package.name, objects.searchScore as score ORDERED BY score",
  },
  {
    id: nanoid(),
    url: "https://registry.npmjs.org/-/v1/search?text=aptos",
    query: "SELECT objects.package.name, objects.searchScore as score ORDERED BY score",
  },
  {
    id: nanoid(),
    url: "https://registry.npmjs.org/-/v1/search?text=aptos",
    query: "SELECT objects.package.name, objects.searchScore as score ORDERED BY score",
  },
  {
    id: nanoid(),
    url: "https://registry.npmjs.org/-/v1/search?text=aptos",
    query: "SELECT objects.package.name, objects.searchScore as score ORDERED BY score",
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
    curl "${url}" | pq -q "${query}"
  `
}

const toRust = (resource: QueryResource) => {
  const { url, query } = resource
  return `
    curl "${url}" | pq -q "${query}"
  `
}

const toPython = (resource: QueryResource) => {
  const { url, query } = resource
  return `
import requests
import piqel as pq
data = request.get(${url})
pq.DataLake(data)
`
}

const toNode = (resource: QueryResource) => {
  const { url, query } = resource
  return `
const {Pool} = requre('piqel')
const r = await fetch("${url}")
const data = await r.json()
const pool = new Pool(JSON.stringify(data))
const d = pool.query("${query}")
`
}