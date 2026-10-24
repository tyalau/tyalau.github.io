import { forwardRef } from 'react'
import Stack from '@mui/material/Stack'
import { MotionSectionHeader } from '@/components/withMotion'
import { NAV_HEIGHT, SECTION_SCROLL_GAP } from '@/constants'

type ScrollSectionProps = {
  header: string
  name?: string
  children: React.ReactNode
}

const ScrollSection = forwardRef<HTMLDivElement, ScrollSectionProps>(({ children, name, header }, ref) => {
  return (
    // scroll-margin leaves room for the fixed nav bar plus some breathing space above the heading
    <Stack component="section" ref={ref} id={name || header} sx={{ scrollMarginTop: `${NAV_HEIGHT + SECTION_SCROLL_GAP}px` }}>
      <MotionSectionHeader>{header}</MotionSectionHeader>
      {children}
    </Stack>
  )
})

ScrollSection.displayName = 'ScrollSection'

export default ScrollSection
