import { forwardRef } from 'react'
import Stack from '@mui/material/Stack'
import { Element } from 'react-scroll'
import { MotionSectionHeader } from '@/components/withMotion'

type ScrollSectionProps = {
  header: string
  name?: string
  children: React.ReactNode
}

const ScrollSection = forwardRef<HTMLDivElement, ScrollSectionProps>(({ children, name, header }, ref) => {
  return (
    <section ref={ref}>
      <Stack component={Element} id={name || header} name={name || header} pt={8} mt={-8}>
        <MotionSectionHeader>{header}</MotionSectionHeader>
        {children}
      </Stack>
    </section>
  )
})

ScrollSection.displayName = 'ScrollSection'

export default ScrollSection
