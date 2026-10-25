'use client'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { HiOutlineArrowDown } from 'react-icons/hi'
import TypingHeadline from '@/components/TypingHeadline'
import { MotionStack, MotionStagger } from '@/components/withMotion'
import { SECTIONS } from '@/constants'
import { Intro } from '@/types'
import { scrollToSection } from '@/utils'

// Hero, top to bottom: grey mono `// location`, huge gradient name, typing role line, about paragraphs, two buttons.
// The name size is the clamp() on the h1 (min, scales with screen width, max); minHeight sets how tall the hero is.
// Each row fades in one after another (MotionStagger)
export default function IntroSection({ name, headline, location, about }: Intro) {
  const roles = headline
    .split('|')
    .map((role) => role.trim())
    .filter(Boolean)

  return (
    <MotionStagger
      component="section"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      textAlign="center"
      sx={{ minHeight: 'min(80svh, 720px)' }}
    >
      <MotionStack>
        <Typography variant="body2" color="text.secondary" className="mono-font">
          {`// ${location}`}
        </Typography>
      </MotionStack>
      <MotionStack>
        <Typography component="h1" variant="h1" className="gradient-text">
          {name}
        </Typography>
      </MotionStack>
      <MotionStack>
        <TypingHeadline phrases={roles} />
      </MotionStack>
      <MotionStack spacing={1} maxWidth="sm">
        {about.map((item) => (
          <Typography variant="body1" key={item}>
            {item}
          </Typography>
        ))}
      </MotionStack>
      <MotionStack direction="row" spacing={1}>
        <Button endIcon={<HiOutlineArrowDown />} onClick={() => scrollToSection(SECTIONS.projects)}>
          View projects
        </Button>
        <Button variant="outlined" onClick={() => scrollToSection(SECTIONS.experience)}>
          Experience
        </Button>
      </MotionStack>
    </MotionStagger>
  )
}
