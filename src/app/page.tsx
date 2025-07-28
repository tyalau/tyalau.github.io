import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Blogs from '@/containers/Blogs'
import Profile from '@/containers/Profile'
import Projects from '@/containers/Projects'

export default async function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={4}>
        <Profile />
        <Projects />
        <Blogs />
      </Stack>
    </Container>
  )
}
