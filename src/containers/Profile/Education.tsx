import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SectionHeader from '@/components/SectionHeader'
import { Education } from '@/types'

type EducationProps = {
  data: Education[]
}

export default function EducationSection({ data }: EducationProps) {
  return (
    <Stack>
      <SectionHeader>Education</SectionHeader>
      <Stack spacing={2}>
        {data.map(({ school, degree, location, duration }) => (
          <Stack key={school} spacing={1}>
            <Typography variant="h6">{school}</Typography>
            <Typography variant="body1">{degree}</Typography>
            <Typography variant="body1" color="textSecondary">
              {duration} · {location}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
