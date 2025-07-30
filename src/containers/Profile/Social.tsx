import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import { Social } from '@/types'

const socials: Social[] = [
  {
    icon: <FaGithub />,
    name: 'GitHub',
    url: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
  },
  {
    icon: <FaLinkedin />,
    name: 'LinkedIn',
    url: `https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USERNAME}`,
  },
  {
    icon: <FaMedium />,
    name: 'Medium',
    url: `https://medium.com/${process.env.NEXT_PUBLIC_MEDIUM_USERNAME}`,
  },
]

export default function SocialSection() {
  return (
    <Stack component="section" direction="row" spacing={1} justifyContent="center">
      {socials.map(({ icon, name, url }) => (
        <Button key={name} type="button" startIcon={icon} href={url} target="_blank" rel="noopener">
          {name}
        </Button>
      ))}
    </Stack>
  )
}
