import Stack from '@mui/material/Stack'
import { Element } from 'react-scroll'
import SectionHeader from '@/components/SectionHeader'

type ScrollSectionProps = {
  header: string
  name?: string
  children: React.ReactNode
}

export default function ScrollSection({ children, name, header }: ScrollSectionProps) {
  return (
    <section>
      <Stack component={Element} id={name || header} name={name || header} pt={8} mt={-8}>
        <SectionHeader>{header}</SectionHeader>
        {children}
      </Stack>
    </section>
  )
}
