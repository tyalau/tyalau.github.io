import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Profile from '@/containers/Profile'

export default async function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={4}>
        <Profile />
      </Stack>
    </Container>
  )
}
