import { forwardRef } from 'react'
import Typography from '@mui/material/Typography'

const SectionHeader = forwardRef<HTMLDivElement, { children: React.ReactNode }>(({ children }, ref) => {
  return (
    <div ref={ref}>
      <Typography variant="h5" className="gradient-text">
        {children}
      </Typography>
    </div>
  )
})

SectionHeader.displayName = 'SectionHeader'

export default SectionHeader
