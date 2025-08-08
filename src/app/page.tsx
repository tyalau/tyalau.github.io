import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Blog from '@/containers/Blog'
import Footer from '@/containers/Footer'
import NavBar from '@/containers/NavBar'
import Profile from '@/containers/Profile'
import Repos from '@/containers/Repos'

export default function Home() {
  return (
    <Stack className="gradient-bg">
      <NavBar />
      <Container component="main" maxWidth="md" sx={{ py: 4, mt: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Profile />
        <Repos />
        <Blog />
      </Container>
      <Footer />
    </Stack>
  )
}
