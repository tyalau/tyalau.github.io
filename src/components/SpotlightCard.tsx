'use client'

import { forwardRef } from 'react'
import Card, { CardProps } from '@mui/material/Card'

// Makes a card light up under the mouse: a soft pink spotlight follows the cursor while hovering.
// The glow itself is drawn by the MuiCard hover style in theme.ts (its size and colour are there);
// this component only supplies the cursor position.
// Writes the cursor position to --mx/--my (read by the MuiCard hover style) without triggering a React re-render
const SpotlightCard = forwardRef<HTMLDivElement, CardProps>(({ onPointerMove, ...props }, ref) => {
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse') {
      const { left, top } = event.currentTarget.getBoundingClientRect()
      event.currentTarget.style.setProperty('--mx', `${event.clientX - left}px`)
      event.currentTarget.style.setProperty('--my', `${event.clientY - top}px`)
    }
    onPointerMove?.(event)
  }

  return <Card ref={ref} onPointerMove={handlePointerMove} {...props} />
})

SpotlightCard.displayName = 'SpotlightCard'

export default SpotlightCard
