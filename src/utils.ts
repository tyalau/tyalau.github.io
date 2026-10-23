import { ChipProps } from '@mui/material/Chip'

export const getLanguageColour = (language: string): ChipProps['color'] => {
  switch (language.toLowerCase()) {
    case 'javascript':
      return 'info'
    case 'typescript':
      return 'accent'
    case 'css':
      return 'secondary'
    case 'html':
      return 'warning'
    case 'python':
    case 'shell':
      return 'success'
    case 'go':
      return 'accent'
    case 'rust':
      return 'error'
    case 'java':
      return 'warning'
    default:
      return 'primary'
  }
}

export const decodeUnicodeEscapes = (s: string) =>
  s.replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)))

export const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }
  return new Date(date).toLocaleDateString('en-US', options)
}

export const formatMonth = (date: string) =>
  new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })
