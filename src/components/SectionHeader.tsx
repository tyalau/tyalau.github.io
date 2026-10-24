'use client'

import { forwardRef } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { motion, useReducedMotion } from 'motion/react'

const MotionBox = motion.create(Box)

// Section title (gradient mono text) with a short gradient underline that draws in from the left when revealed.
// width/height = underline length/thickness, mb = gap between the title block and the section content.
// Inherits hidden/visible from the surrounding MotionSectionHeader so the underline draws in on reveal
const SectionHeader = forwardRef<HTMLDivElement, { children: React.ReactNode }>(({ children }, ref) => {
  const reduceMotion = useReducedMotion()

  return (
    <div ref={ref}>
      <Typography variant="h5" className="gradient-text">
        {children}
      </Typography>
      <MotionBox
        aria-hidden
        variants={
          reduceMotion
            ? undefined
            : {
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' } },
              }
        }
        sx={(theme) => ({
          width: 48,
          height: 2,
          mt: 0.5,
          mb: 2,
          borderRadius: 1,
          transformOrigin: 'left',
          background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
          boxShadow: theme.glow(theme.palette.secondary.main, 0.5),
        })}
      />
    </div>
  )
})

SectionHeader.displayName = 'SectionHeader'

export default SectionHeader
