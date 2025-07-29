import Projects from '@/containers/Repos/Projects'
import { Repo } from '@/types'

export default async function Repos() {
  const res = await fetch(`https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  })

  const repos: Repo[] = await res.json()

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
