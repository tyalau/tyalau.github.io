import Stack from '@mui/material/Stack'
import Intro from '@/containers/Profile/Intro'
import Social from '@/containers/Profile/Social'
import TechStack from '@/containers/Profile/TechStack'
import { ProfileData } from '@/types'

export default async function Profile() {
  const res = await fetch(process.env.NEXT_PUBLIC_PROFILE_DATA_URL)
  const profileData: ProfileData = await res.json()
  return (
    <Stack spacing={4}>
      <Intro {...profileData.intro} />
      <Social />
      <TechStack data={profileData.techStack} />
    </Stack>
  )
}
