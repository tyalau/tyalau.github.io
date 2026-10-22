export type Intro = {
  name: string
  headline: string
  location: string
  about: string[]
}

export type TechStack = {
  group: string
  items: string[]
}

export type Experience = {
  title: string
  company?: string
  duration: string
  location: string
  description: string[]
}

export type ExperienceDocument = Omit<Experience, 'duration'> & {
  startDate: string
  endDate?: string
}

export type Education = {
  school: string
  degree: string
  location: string
}

export type SocialPlatform = 'github' | 'linkedin' | 'medium' | 'goodreads'

export type SocialLink = {
  platform: SocialPlatform
  url: string
}

export type Repo = {
  name: string
  description: string | null
  svn_url: string
  language: string | null
  homepage: string | null
}

export type Blog = {
  title: string
  pubDate: string
  link: string
  description: string
}

export type ProfileQueryResult = Intro & {
  slug: string
  techStack: TechStack[]
  socialLinks: SocialLink[]
  experience: ExperienceDocument[]
  education: Education[]
}
