import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Intro } from '@/types'

export default async function IntroSection({ name, headline, location, about }: Intro) {
  return (
    <Stack alignItems="center" spacing={1} textAlign="center">
      <Typography variant="h5">Hello World!</Typography>
      <Typography variant="h3">
        I'm&nbsp;
        <Typography component="span" variant="h3" className="gradient-text">
          {name}
        </Typography>
      </Typography>
      <Typography variant="h6" color="accent.light">
        {headline} | {location}
      </Typography>
      {about.map((item) => (
        <Typography variant="body1" key={item}>
          {item}
        </Typography>
      ))}
    </Stack>
  )
}
