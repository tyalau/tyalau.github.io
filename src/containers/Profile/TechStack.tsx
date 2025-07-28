import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { TechStack } from '@/types'

type TechStackProps = {
  data: TechStack[]
}

export default async function TechStackSection({ data }: TechStackProps) {
  return (
    <Stack>
      <div>
        <Typography variant="h4" className="gradient-text">
          Tech Stack
        </Typography>
      </div>
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
