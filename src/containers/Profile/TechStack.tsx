'use client'

import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ScrollSection from '@/components/ScrollSection'
import { MotionStack } from '@/components/withMotion'
import { TechStack } from '@/types'

type TechStackProps = {
  data: TechStack[]
}

export default function TechStackSection({ data }: TechStackProps) {
  return (
    <ScrollSection header="Tech Stack">
      <Stack spacing={2}>
        {data.map(({ group, items }) => (
          <MotionStack key={group} spacing={1}>
            <Typography variant="h6">{group}</Typography>
            <Stack direction="row" spacing={0.5} flexWrap="wrap">
              {items.map((item) => (
                <Chip key={item} label={item} variant="outlined" color="primary" />
              ))}
            </Stack>
          </MotionStack>
        ))}
      </Stack>
    </ScrollSection>
  )
}
