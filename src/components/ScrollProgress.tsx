'use client'

import Box from '@mui/material/Box'
import { motion, useScroll, useSpring } from 'motion/react'

const MotionBox = motion.create(Box)

// A thin pink-to-purple glowing line along the bottom edge of the nav bar that grows from left to right
// as you scroll down the page. height = line thickness, the spring = how smoothly it follows the scroll
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <MotionBox
      aria-hidden
      style={{ scaleX }}
      sx={(theme) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 2,
        transformOrigin: 'left',
        background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
        boxShadow: theme.glow(theme.palette.secondary.main),
      })}
    />
  )
}
