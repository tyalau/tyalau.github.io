import { ChipProps } from '@mui/material'

export const getLanguageColour = (language: string): ChipProps['color'] => {
  switch (language.toLowerCase()) {
    case 'javascript':
      return 'warning'
    case 'typescript':
      return 'info'
    case 'css':
      return 'accent'
    case 'html':
      return 'error'
    default:
      return 'default'
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
