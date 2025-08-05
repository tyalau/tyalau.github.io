import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { HiLocationMarker } from 'react-icons/hi'
import SectionHeader from '@/components/SectionHeader'
import { Education } from '@/types'

type EducationProps = {
  data: Education[]
}

export default function EducationSection({ data }: EducationProps) {
  return (
    <Stack component="section">
      <SectionHeader>Education</SectionHeader>
      <Stack spacing={2}>
        {data.map(({ school, degree, location }) => (
          <Stack key={school} spacing={1}>
            <Typography variant="h6">{school}</Typography>
            <Typography variant="body1">{degree}</Typography>
            <Typography component={Stack} direction="row" alignItems="center" spacing={0.5} variant="body1" color="textSecondary">
              <HiLocationMarker />
              <div>{location}</div>
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
