import Posts from '@/containers/Blog/Posts'
import { Blog } from '@/types'

export default async function Blogs() {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${process.env.NEXT_PUBLIC_MEDIUM_USERNAME}`
  )

  const data = await res.json()

  const blogs: Blog[] = data.items

  return <Posts data={blogs} />
}
