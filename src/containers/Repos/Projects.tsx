'use client'

import Card, { cardClasses } from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { FaCode } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import ScrollSection from '@/components/ScrollSection'
import { Repo } from '@/types'
import { getLanguageColour } from '@/utils'

type ProjectProps = {
  data: Repo[]
}

export default function Project({ data }: ProjectProps) {
  return (
    <ScrollSection header="Open Source Projects" name="Projects">
      <Grid container spacing={2} mt={2}>
        {data.map(({ name, description, svn_url, language, homepage }) => {
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
    </ScrollSection>
  )
}
