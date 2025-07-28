import Stack from '@mui/material/Stack'
import Intro from '@/containers/Profile/Intro'
import { ProfileData } from '@/types'

export default async function Profile() {
  const res = await fetch(process.env.NEXT_PUBLIC_PROFILE_DATA_URL)
  const profileData: ProfileData = await res.json()
  return (
    <Stack spacing={4}>
      <Intro {...profileData.intro} />
    </Stack>
  )
}
