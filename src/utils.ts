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
