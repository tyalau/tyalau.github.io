import Posts from '@/containers/Blog/Posts'
import { Blog } from '@/types'

export default async function Blogs() {
  const url = new URL('https://api.rss2json.com/v1/api.json')
  url.searchParams.set('rss_url', `https://medium.com/feed/${process.env.NEXT_PUBLIC_MEDIUM_USERNAME}`)

  const res = await fetch(url.toString(), {
    next: { revalidate: 3600 },
  })

  const data = await res.json()

  if (!res.ok) return null

  const blogs: Blog[] = data.items

  return <Posts data={blogs} />
}
