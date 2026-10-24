'use client'

import Box from '@mui/material/Box'
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
            aria-label={SOCIAL_PLATFORMS[platform].name}
            sx={(theme) => ({
              height: 40,
              // Icon-only 48px circle on mobile; larger screens keep MUI's own icon spacing and button padding
              [theme.breakpoints.down('sm')]: {
                minWidth: 48,
                height: 48,
                px: 0,
                borderRadius: '50%',
                '& .MuiButton-startIcon': {
                  m: 0,
                  '& > *:nth-of-type(1)': { fontSize: 24 },
                },
              },
            })}
          >
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
              {SOCIAL_PLATFORMS[platform].name}
            </Box>
          </Button>
        ))}
    </MotionStack>
  )
}
