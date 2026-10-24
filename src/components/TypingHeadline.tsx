'use client'

import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { keyframes } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useReducedMotion } from 'motion/react'

const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`

// Typing speed in ms per character, how fast it deletes, and how long a finished phrase stays on screen
const TYPE_MS = 60
const DELETE_MS = 30
const HOLD_MS = 2000

type TypingHeadlineProps = {
  phrases: string[]
}

// The role line in the hero: letters type out one by one, followed by a blinking pink block cursor.
// The cursor's size and colour are the Box at the bottom; the blink speed is the 1s in its animation.
// Types each phrase, holds, deletes it and moves to the next; a single phrase is typed once and left in place
export default function TypingHeadline({ phrases }: TypingHeadlineProps) {
  const reduceMotion = useReducedMotion()
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const phrase = phrases[phraseIndex] ?? ''
  const cycles = phrases.length > 1

  useEffect(() => {
    if (reduceMotion) return

    const isTyped = length === phrase.length
    if (isTyped && !isDeleting && !cycles) return

    const delay = isTyped && !isDeleting ? HOLD_MS : isDeleting ? DELETE_MS : TYPE_MS
    const timer = setTimeout(() => {
      if (isTyped && !isDeleting) {
        setIsDeleting(true)
      } else if (isDeleting && length === 0) {
        setIsDeleting(false)
        setPhraseIndex((phraseIndex + 1) % phrases.length)
      } else {
        setLength(length + (isDeleting ? -1 : 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [length, isDeleting, phrase, phraseIndex, phrases.length, cycles, reduceMotion])

  const text = reduceMotion ? (phrases[0] ?? '') : phrase.slice(0, length)

  return (
    <Typography variant="h5" color="accent.light" aria-label={phrases.join(', ')} sx={{ minHeight: '1.5em' }}>
      <span aria-hidden>{text}</span>
      <Box
        component="span"
        aria-hidden
        sx={{
          display: 'inline-block',
          width: '0.6ch',
          height: '1.1em',
          ml: 0.5,
          verticalAlign: 'text-bottom',
          bgcolor: 'secondary.main',
          animation: `${blink} 1s step-end infinite`,
        }}
      />
    </Typography>
  )
}
