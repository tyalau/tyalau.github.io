import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { Metadata } from 'next'
import AuroraBackground from '@/components/AuroraBackground'
import client from '@/sanity/client'
import theme from '@/theme'

const METADATA_QUERY = `*[_type == "siteSettings"][0]{
  "title": metadataTitle,
  "description": metadataDescription
}`

export const generateMetadata = async (): Promise<Metadata> => (await client.fetch<Metadata | null>(METADATA_QUERY)) ?? {}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuroraBackground />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
