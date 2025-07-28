import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Blog } from '@/types'

export default async function Blogs() {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${process.env.NEXT_PUBLIC_MEDIUM_USERNAME}`
  )

  const data = await res.json()

  const blogs: Blog[] = data.items

  return (
    <Stack spacing={2}>
      <div>
        <Typography variant="h4" className="gradient-text">
          Blogs
        </Typography>
      </div>
      <ul>
        {blogs.slice(0, 4).map(({ title, link }) => {
          return (
            <li key={link}>
              <Link href={link} color="inherit" target="_blank" rel="noopener">
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </Stack>
  )
}
