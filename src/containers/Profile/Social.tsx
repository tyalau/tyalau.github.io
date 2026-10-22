'use client'

import Button from '@mui/material/Button'
import { FaGithub, FaGoodreads, FaLinkedin, FaMedium } from 'react-icons/fa'
import { MotionStack } from '@/components/withMotion'
import { SocialLink, SocialPlatform } from '@/types'

const SOCIAL_PLATFORMS: Record<SocialPlatform, { icon: React.ReactNode; name: string }> = {
  github: {
    icon: <FaGithub />,
    name: 'GitHub',
  },
  linkedin: {
    icon: <FaLinkedin />,
    name: 'LinkedIn',
  },
  medium: {
    icon: <FaMedium />,
    name: 'Medium',
  },
  goodreads: {
    icon: <FaGoodreads />,
    name: 'Goodreads',
  },
}

type SocialProps = {
  data: SocialLink[]
}

export default function SocialSection({ data }: SocialProps) {
  return (
    <MotionStack component="section" direction="row" spacing={1} justifyContent="center">
      {data
        .filter(({ platform }) => platform in SOCIAL_PLATFORMS)
        .map(({ platform, url }) => (
          <Button
            key={platform}
            type="button"
            startIcon={SOCIAL_PLATFORMS[platform].icon}
            href={url}
            target="_blank"
            rel="noopener"
          >
            {SOCIAL_PLATFORMS[platform].name}
          </Button>
        ))}
    </MotionStack>
  )
}
