import Card, { cardClasses } from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { FaCode } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { Repo } from '@/types'
import { getLanguageColour } from '@/utils'

export default async function Projects() {
  const res = await fetch(`https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  })

  const repos: Repo[] = await res.json()

  const featuredProjects = process.env.NEXT_PUBLIC_FEATURED_PROJECTS.split(',').map((project) => {
    const featuredProject = repos.find(({ name }) => name === project)
    if (featuredProject) {
      return {
        name: featuredProject.name,
        description: featuredProject.description,
        svn_url: featuredProject.svn_url,
        language: featuredProject.language,
        homepage: featuredProject.homepage,
      }
    }
    return undefined
  }) as Repo[]

  return (
    <Stack spacing={2}>
      <div>
        <Typography variant="h4" className="gradient-text">
          Open Source Projects
        </Typography>
      </div>
      <Grid container spacing={2}>
        {featuredProjects.map(({ name, description, svn_url, language, homepage }) => {
          return (
            <Grid
              size={{ xs: 12, sm: 6 }}
              key={name}
              sx={{
                display: 'flex',
                [`& .${cardClasses.root}`]: {
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                },
              }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {name}
                  </Typography>
                  {description && <Typography variant="body1">{description}</Typography>}
                </CardContent>
                <CardActions>
                  {language && <Chip label={language} variant="outlined" color={getLanguageColour(language)} />}
                  {svn_url && (
                    <Chip
                      label="Source"
                      component="a"
                      icon={<FaCode />}
                      href={svn_url}
                      clickable
                      target="_blank"
                      rel="noopener"
                    />
                  )}
                  {homepage && (
                    <Chip
                      label="Demo"
                      color="primary"
                      component="a"
                      icon={<HiOutlineExternalLink />}
                      href={homepage}
                      clickable
                      target="_blank"
                      rel="noopener"
                    />
                  )}
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Stack>
  )
}
