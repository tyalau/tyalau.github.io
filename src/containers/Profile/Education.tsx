import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Education } from '@/types'

type EducationProps = {
  data: Education[]
}

export default async function EducationSection({ data }: EducationProps) {
  return (
    <Stack>
      <div>
        <Typography variant="h4" className="gradient-text">
          Education
        </Typography>
      </div>
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
