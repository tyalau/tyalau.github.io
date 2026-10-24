import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Footer from '@/containers/Footer'
import NavBar from '@/containers/NavBar'
import Profile from '@/containers/Profile'
import Repos from '@/containers/Repos'
import { NAV_HEIGHT } from '@/constants'
import client from '@/sanity/client'

const GITHUB_USERNAME_QUERY = `*[_type == "siteSettings"][0].githubUsername`

export default async function Home() {
  const githubUsername = await client.fetch<string | null>(GITHUB_USERNAME_QUERY)
  if (!githubUsername) throw new Error('siteSettings.githubUsername not found in Sanity')

  return (
    <Stack className="gradient-bg">
      <NavBar slug={githubUsername} />
      <Container
        component="main"
        maxWidth="md"
        sx={{ py: 4, mt: `${NAV_HEIGHT}px`, display: 'flex', flexDirection: 'column', gap: 4 }}
      >
        <Profile />
        <Repos />
      </Container>
      <Footer />
    </Stack>
  )
}
