import Education from '@/containers/Profile/Education'
import Experience from '@/containers/Profile/Experience'
import Intro from '@/containers/Profile/Intro'
import Social from '@/containers/Profile/Social'
import TechStack from '@/containers/Profile/TechStack'
import client from '@/sanity/client'
import { ProfileQueryResult } from '@/types'
import { formatMonth } from '@/utils'

const PROFILE_QUERY = `*[_type == "siteSettings"][0]{
  name, headline, location, about, "slug": githubUsername,
  techStack[]{group, items},
  socialLinks[]{platform, url},
  "experience": *[_type == "experience"]|order(startDate desc){
    title, company, location, startDate, endDate, description
  },
  "education": *[_type == "education"]|order(startDate desc){school, degree, location}
}`

export default async function Profile() {
  const profile = await client.fetch<ProfileQueryResult>(PROFILE_QUERY)

  const experience = profile.experience.map(({ startDate, endDate, ...rest }) => ({
    ...rest,
    duration: `${formatMonth(startDate)} - ${endDate ? formatMonth(endDate) : 'Present'}`,
  }))

  return (
    <>
      <Intro {...profile} />
      <Social data={profile.socialLinks} />
      <TechStack data={profile.techStack} />
      <Experience data={experience} slug={profile.slug} />
      <Education data={profile.education} />
    </>
  )
}
