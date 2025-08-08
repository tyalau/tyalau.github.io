'use client'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { HiLocationMarker } from 'react-icons/hi'
import { MotionSectionHeader, MotionStack } from '@/components/withMotion'
import { Education } from '@/types'

type EducationProps = {
  data: Education[]
}

export default function EducationSection({ data }: EducationProps) {
  return (
    <Stack component="section">
      <MotionSectionHeader>Education</MotionSectionHeader>
      <Stack spacing={2}>
        {data.map(({ school, degree, location }) => (
          <MotionStack key={school} spacing={1}>
            <Typography variant="h6">{school}</Typography>
            <Typography variant="body1">{degree}</Typography>
            <Typography component={Stack} direction="row" alignItems="center" spacing={0.5} variant="body1" color="textSecondary">
              <HiLocationMarker />
              <div>{location}</div>
            </Typography>
          </MotionStack>
        ))}
      </Stack>
    </Stack>
  )
}
