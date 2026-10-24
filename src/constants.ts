// Section ids shared by the sections themselves (ScrollSection `name`), the nav tabs and the hero buttons,
// so renaming one never silently breaks scrolling or the active-tab highlight
export const SECTIONS = {
  techStack: 'Tech Stack',
  experience: 'Experience',
  projects: 'Projects',
  blogPosts: 'Blog Posts',
} as const

// Sections that get a nav tab, in page order
export const NAV_SECTIONS: string[] = [SECTIONS.techStack, SECTIONS.experience, SECTIONS.projects]

// Fixed nav bar height in px. The nav toolbar, the space reserved above the page content, the scroll-spy band
// and the scroll offset all derive from this one value
export const NAV_HEIGHT = 64

// Breathing room in px between the nav bar and a section heading after jumping to a section
export const SECTION_SCROLL_GAP = 32
