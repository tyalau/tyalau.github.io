import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function NotFound() {
  return (
    <Stack height="100vh" alignItems="center" justifyContent="center">
      <Typography className="gradient-text" variant="h1">
        404
      </Typography>
      <Typography variant="h6">Oops...page not found.</Typography>
      <Box mt={2}>
        <Button variant="outlined" href="/">
          Go home
        </Button>
      </Box>
    </Stack>
  )
}
