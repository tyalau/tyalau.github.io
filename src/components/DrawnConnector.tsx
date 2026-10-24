'use client'

import { useRef } from 'react'
import TimelineConnector from '@mui/lab/TimelineConnector'
import { motion, useReducedMotion, useScroll } from 'motion/react'

const MotionConnector = motion.create(TimelineConnector)

// The vertical line between timeline dots. It starts empty and fills downward as you scroll, like a line being
// drawn. Change the 0.6 in `offset` to start filling earlier (larger) or later (smaller) on screen.
// Draws downward as a shared line 60% down the viewport passes it; connectors sit end to end, so they fill in sequence
export default function DrawnConnector() {
  const ref = useRef<HTMLSpanElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.6', 'end 0.6'] })

  return <MotionConnector ref={ref} style={{ scaleY: reduceMotion ? 1 : scrollYProgress, originY: 0 }} />
}
