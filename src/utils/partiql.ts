
export const partiqlAPI = async (srcUrl: string, query: string) => {
  const baseUrl = 'https://piqel.vercel.app/api/partiql'
  // const baseUrl = 'http://localhost:3000/api/partiql'
  let params = new URLSearchParams()
  params.set("url", srcUrl)
  params.set("q", query)
  const proxy = `${baseUrl}?${params}`
  const r = await fetch(proxy)
  return await r.json()
}