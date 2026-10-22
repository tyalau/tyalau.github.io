import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import client from '@/sanity/client'

const FOOTER_QUERY = `*[_type == "siteSettings"][0].name`

export default async function Footer() {
  const name = await client.fetch<string | null>(FOOTER_QUERY)
  if (!name) throw new Error('siteSettings.name not found in Sanity')

  return (
    <Stack p={2} direction="row" justifyContent="center">
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </Typography>
    </Stack>
  )
}
