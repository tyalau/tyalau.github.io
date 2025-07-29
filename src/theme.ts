'use client'

import { createTheme, lighten, darken } from '@mui/material/styles'
import { Baloo_2, Playwrite_US_Modern } from 'next/font/google'

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary']
  }

  interface PaletteOptions {
    accent?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    accent: true
  }
}

const baloo2 = Baloo_2({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const playwrite = Playwrite_US_Modern({
  weight: ['300', '400'],
  display: 'swap',
})

const featureFontFamily = playwrite.style.fontFamily

const primaryBase = '#00d3bb'

const secondaryBase = '#f43098'

const accentBase = '#605dff'

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '.gradient-text': {
          background: `linear-gradient(to right, ${secondaryBase}, ${primaryBase})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
        },
        '.feature-font': {
          fontFamily: `${featureFontFamily} !important`,
          lineHeight: 'normal !important',
        },
      },
    },
    MuiButton: {
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
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          marginBottom: '8px !important',
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
            },
          },
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: primaryBase,
      contrastText: '#084d49',
    },
    secondary: {
      main: secondaryBase,
      contrastText: '#f9e4f0',
    },
    accent: {
      light: lighten(accentBase, 0.2),
      main: '#605dff',
      dark: darken(accentBase, 0.2),
      contrastText: '#edf1fe',
    },
    error: {
      main: '#ff637d',
      contrastText: '#4d0218',
    },
    warning: {
      main: '#fcb700',
      contrastText: '#793205',
    },
    info: {
      main: '#00bafe',
      contrastText: '#042e49',
    },
    success: {
      main: '#00d390',
      contrastText: '#004c39',
    },
    grey: {
      50: '#fafafa',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5dc',
      400: '#94a1b3',
      500: '#677384',
      600: '#4a5565',
      700: '#354151',
      800: '#1e2939',
      900: '#101828',
    },
    text: {
      primary: '#ecf9ff',
      secondary: '#ecf9ffb3',
      disabled: '#ecf9ff33',
    },
    divider: '#ecf9ff1a',
    background: {
      default: '#1d232a',
      paper: '#191e24',
    },
  },
  typography: {
    fontFamily: baloo2.style.fontFamily,
    fontSize: 16,
    h4: { fontFamily: featureFontFamily, lineHeight: 'normal' },
    h5: { fontFamily: featureFontFamily, lineHeight: 'normal' },
  },
})

export default theme
