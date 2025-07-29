import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ProfileData } from '@/types'

export default async function Footer() {
  const res = await fetch(process.env.NEXT_PUBLIC_PROFILE_DATA_URL)
  const profileData: ProfileData = await res.json()

  return (
    <Stack p={2} direction="row" justifyContent="center">
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} {profileData.intro.name}. All rights reserved.
      </Typography>
    </Stack>
  )
}
