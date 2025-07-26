'use client'

import { createTheme } from '@mui/material/styles'
import { Fira_Code, Corinthia } from 'next/font/google'

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary']
  }

  interface PaletteOptions {
    accent?: PaletteOptions['primary']
  }
}

const firaCode = Fira_Code({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const cortinthia = Corinthia({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const headingFontFamily = cortinthia.style.fontFamily

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#605dff',
      contrastText: '#edf1fe',
    },
    secondary: {
      main: '#f43098',
      contrastText: '#f9e4f0',
    },
    accent: {
      main: '#00d3bb',
      contrastText: '#084d49',
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
    fontFamily: firaCode.style.fontFamily,
    h1: { fontFamily: headingFontFamily },
    h2: { fontFamily: headingFontFamily },
    h3: { fontFamily: headingFontFamily },
    h4: { fontFamily: headingFontFamily },
    h5: { fontFamily: headingFontFamily },
    h6: { fontFamily: headingFontFamily },
  },
})

export default theme
