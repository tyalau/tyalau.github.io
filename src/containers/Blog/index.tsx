import Posts from '@/containers/Blog/Posts'
import { Blog } from '@/types'

export default async function Blogs() {
  const url = new URL('https://api.rss2json.com/v1/api.json')
  url.searchParams.set('rss_url', `https://medium.com/feed/${process.env.NEXT_PUBLIC_MEDIUM_USERNAME}`)
  url.searchParams.set('v', Date.now().toString())

  const res = await fetch(url.toString())

  const data = await res.json()

  if (!res.ok) return null

  const blogs: Blog[] = data.items

  return <Posts data={blogs} />
}
