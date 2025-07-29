import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SectionHeader from '@/components/SectionHeader'
import { TechStack } from '@/types'

type TechStackProps = {
  data: TechStack[]
}

export default function TechStackSection({ data }: TechStackProps) {
  return (
    <Stack>
      <SectionHeader>Tech Stack</SectionHeader>
      <Stack spacing={2}>
        {data.map(({ group, items }) => (
          <Stack key={group} spacing={1}>
            <Typography variant="h6">{group}</Typography>
            <Stack direction="row" spacing={0.5} flexWrap="wrap">
              {items.map((item) => (
                <Chip key={item} label={item} variant="outlined" color="primary" />
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
