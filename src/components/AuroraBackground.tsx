'use client'

import { useMemo } from 'react'
import Box from '@mui/material/Box'
import { alpha, keyframes, useTheme } from '@mui/material/styles'

// Blob movement: each glow wanders right/down, then left/further down, then home. Bigger vw/vh = wider travel,
// scale = how much it swells and shrinks on the way
const drift = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20vw, 14vh) scale(1.2); }
  66% { transform: translate(-16vw, 22vh) scale(0.9); }
`

// Star twinkle: fades from full brightness to 25% and back. Lower the 0.25 for a stronger blink
const twinkle = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.25; }
`

// Seeded so server and client render identical star positions
const seededRandom = (initialSeed: number) => {
  let seed = initialSeed
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const createStars = (count: number, colour: string, seed: number) => {
  const random = seededRandom(seed)
  return Array.from({ length: count }, () => `${(random() * 100).toFixed(2)}vw ${(random() * 100).toFixed(2)}vh ${colour}`).join(
    ', '
  )
}

// Stars: tiny dots scattered over the whole screen, twinkling.
// size = dot diameter in px, count = how many, tint = theme colour (text = white, accent = cyan, secondary = pink),
// opacity = how bright, duration = seconds per twinkle, delay = offset so layers never blink together
const starLayers = [
  { size: 1, count: 70, tint: 'text', opacity: 0.7, seed: 1, duration: 5, delay: 0 },
  { size: 2, count: 28, tint: 'accent', opacity: 0.8, seed: 2, duration: 7, delay: -2 },
  { size: 3, count: 10, tint: 'secondary', opacity: 0.9, seed: 3, duration: 9, delay: -5 },
] as const

// Glows: three huge, soft colour clouds behind everything (purple top-left, pink right, cyan bottom-left).
// size = how big, top/left = starting position, duration = seconds per drift (smaller = faster).
// Their brightness is the 0.2 in the radial-gradient below; raise it for stronger colour
const blobs = [
  { colour: 'primary', size: '60vmax', top: '-20%', left: '-15%', duration: 16 },
  { colour: 'secondary', size: '50vmax', top: '35%', left: '60%', duration: 20 },
  { colour: 'accent', size: '45vmax', top: '75%', left: '-10%', duration: 24 },
] as const

// The whole night-sky backdrop: drifting colour glows underneath, twinkling stars on top.
// It is fixed behind the page and never intercepts clicks. Only transform and opacity are animated so it stays on the GPU
export default function AuroraBackground() {
  const theme = useTheme()

  // Built from the theme so the stars follow any palette change
  const stars = useMemo(
    () =>
      starLayers.map((layer) => {
        const base = layer.tint === 'text' ? theme.palette.text.primary : theme.palette[layer.tint].main
        return { ...layer, shadows: createStars(layer.count, alpha(base, layer.opacity), layer.seed) }
      }),
    [theme]
  )
  return (
    <Box aria-hidden sx={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden', pointerEvents: 'none' }}>
      {blobs.map(({ colour, size, top, left, duration }) => (
        <Box
          key={colour}
          sx={{
            position: 'absolute',
            top,
            left,
            width: size,
            height: size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette[colour].main, 0.2)} 0%, transparent 65%)`,
            animation: `${drift} ${duration}s ease-in-out infinite`,
          }}
        />
      ))}
      {stars.map(({ size, shadows, duration, delay }) => (
        <Box
          key={size}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            // Pixel strings: in sx a bare 1 would mean 100%
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            boxShadow: shadows,
            animation: `${twinkle} ${duration}s ease-in-out ${delay}s infinite`,
          }}
        />
      ))}
    </Box>
  )
}
