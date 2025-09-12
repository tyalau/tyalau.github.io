import Projects from '@/containers/Repos/Projects'
import { Repo } from '@/types'

export default async function Repos() {
  const url = new URL(`https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`)
  url.searchParams.set('v', Date.now().toString())
  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  })

  const repos: Repo[] = await res.json()

  if (!res.ok) return null

  const featuredProjects = process.env.NEXT_PUBLIC_FEATURED_PROJECTS.split(',').map((project) => {
    const featuredProject = repos.find(({ name }) => name === project)
    if (featuredProject) {
      return {
        name: featuredProject.name,
        description: featuredProject.description,
        svn_url: featuredProject.svn_url,
        language: featuredProject.language,
        homepage: featuredProject.homepage,
      }
    }
    return undefined
  }) as Repo[]

  return <Projects data={featuredProjects} />
}
