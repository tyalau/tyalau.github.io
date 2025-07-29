import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Blogs from '@/containers/Blogs'
import Footer from '@/containers/Footer'
import NavBar from '@/containers/NavBar'
import Profile from '@/containers/Profile'
import Repos from '@/containers/Repos'

export default function Home() {
  return (
    <Stack>
      <NavBar />
      <Container component="main" maxWidth="md" sx={{ py: 4, mt: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Profile />
        <Repos />
        <Blogs />
      </Container>
      <Footer />
    </Stack>
  )
}
