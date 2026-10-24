'use client'

import type {} from '@mui/lab/themeAugmentation'
import { createTheme, lighten, darken, alpha } from '@mui/material/styles'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary']
  }

  interface PaletteOptions {
    accent?: PaletteOptions['primary']
  }

  interface Theme {
    glow: (color: string, intensity?: number) => string
    textGlow: (color: string) => string
  }

  interface ThemeOptions {
    glow?: (color: string, intensity?: number) => string
    textGlow?: (color: string) => string
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    accent: true
  }
}

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' })

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], display: 'swap' })

const displayFontFamily = spaceGrotesk.style.fontFamily

const monoFontFamily = jetBrainsMono.style.fontFamily

const primaryBase = '#BD93F9'

const secondaryBase = '#FF79C6'

const accentBase = '#8BE9FD'

const defaultBackground = '#1E1F29'

const dividerColour = '#44475A'

const darkText = '#282A36'

// Layered box-shadow: tight bright core plus a wide diffuse halo
const glow = (color: string, intensity = 1) =>
  `0 0 ${4 * intensity}px ${alpha(color, 0.6)}, 0 0 ${20 * intensity}px ${alpha(color, 0.35)}`

// Layered text-shadow: tight core plus a wide diffuse halo
const textGlow = (color: string) => `0 0 4px ${alpha(color, 0.7)}, 0 0 16px ${alpha(color, 0.4)}`

const theme = createTheme({
  cssVariables: true,
  glow,
  textGlow,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Pink-to-purple gradient text with a soft purple glow behind the letters (used for the name and section titles)
        '.gradient-text': {
          background: `linear-gradient(to right, ${secondaryBase}, ${primaryBase})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
          // text-shadow would show through the transparent fill, so glow the clipped glyphs instead
          filter: `drop-shadow(0 0 8px ${alpha(primaryBase, 0.45)})`,
        },
        // Smooth scrolling for section jumps, only for visitors who haven't asked for less motion
        '@media (prefers-reduced-motion: no-preference)': {
          html: { scrollBehavior: 'smooth' },
        },
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
          },
        },
        '.mono-font': {
          fontFamily: `${monoFontFamily} !important`,
          lineHeight: 'normal !important',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          borderRadius: 100,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: 'none',
          backgroundColor: alpha(dividerColour, 0.4),
          backdropFilter: 'blur(12px)',
          border: `1px solid ${alpha(primaryBase, 0.25)}`,
          transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            borderColor: alpha(primaryBase, 0.8),
            boxShadow: glow(primaryBase),
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        slotProps: {
          indicator: {
            sx: {
              background: `linear-gradient(to right, ${secondaryBase}, ${primaryBase})`,
              borderRadius: 10,
              boxShadow: glow(secondaryBase, 0.5),
            },
          },
        },
      },
    },
    MuiTimelineOppositeContent: {
      styleOverrides: {
        root: {
          flex: 0.3,
        },
      },
    },
    MuiTimelineContent: {
      styleOverrides: {
        root: {
          '& ul': {
            paddingInlineStart: 16,
          },
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: primaryBase,
      contrastText: darkText,
    },
    secondary: {
      main: secondaryBase,
      contrastText: darkText,
    },
    accent: {
      light: lighten(accentBase, 0.2),
      main: accentBase,
      dark: darken(accentBase, 0.2),
      contrastText: darkText,
    },
    error: {
      main: '#FF5555',
      contrastText: darkText,
    },
    warning: {
      main: '#FFB86C',
      contrastText: darkText,
    },
    info: {
      main: '#F1FA8C',
      contrastText: darkText,
    },
    success: {
      main: '#50FA7B',
      contrastText: darkText,
    },
    text: {
      primary: '#F8F8F2',
      // Dracula comment (#6272A4) is only ~2.5:1 on paper, so body-secondary text uses a lighter tint of it
      secondary: '#9AA5CE',
      disabled: '#6272A4',
    },
    divider: dividerColour,
    background: {
      default: defaultBackground,
      paper: '#282A36',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    fontSize: 15,
    h1: { fontFamily: displayFontFamily },
    h2: { fontFamily: displayFontFamily },
    h3: { fontFamily: displayFontFamily },
    h4: { fontFamily: displayFontFamily },
    h5: { fontFamily: monoFontFamily },
  },
})

export default theme
