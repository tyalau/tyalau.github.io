import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function NotFound() {
  return (
    <Stack height="100vh" alignItems="center" justifyContent="center">
      <Typography className="feature-font gradient-text" variant="h2">
        404
      </Typography>
      <Typography variant="h6">Opps...page not found.</Typography>
      <Box mt={2}>
        <Button href="/">Go home</Button>
      </Box>
    </Stack>
  )
}
