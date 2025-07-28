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

export type Education = {
  school: string
  degree: string
  location: string
  duration: string
}

export type ProfileData = {
  intro: Intro
  techStack: TechStack[]
  experience: Experience[]
  education: Education[]
}

export type Social = {
  icon: React.ReactNode
  name: string
  url: string
}

export type Repo = {
  name: string
  description: string | null
  svn_url: string
  language: string | null
  homepage: string | null
}
