import Projects from '@/containers/Repos/Projects'
import client from '@/sanity/client'
import { Repo } from '@/types'

const FEATURED_PROJECTS_QUERY = `{
  "githubUsername": *[_type == "siteSettings"][0].githubUsername,
  "repoNames": *[_type == "project"]|order(repoName asc).repoName
}`

type FeaturedProjects = {
  githubUsername: string
  repoNames: string[]
}

export default async function Repos() {
  const { githubUsername, repoNames } = await client.fetch<FeaturedProjects>(FEATURED_PROJECTS_QUERY)

  const url = new URL(`https://api.github.com/users/${githubUsername}/repos?per_page=100`)
  const res = await fetch(url.toString(), {
    next: { revalidate: 3600 },
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  })

  if (!res.ok) return null

  const repos: Repo[] = await res.json()

  const featuredProjects = repoNames.flatMap((repoName) => {
    const repo = repos.find(({ name }) => name === repoName)
    if (!repo) return []
    const { name, description, svn_url, language, homepage } = repo
    return [{ name, description, svn_url, language, homepage }]
  })

  return <Projects data={featuredProjects} />
}
