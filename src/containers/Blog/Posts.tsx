'use client'

import Card, { cardClasses } from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { motion } from 'motion/react'
import { parse } from 'node-html-parser'
import { MdPublish, MdRemoveRedEye } from 'react-icons/md'
import ScrollSection from '@/components/ScrollSection'
import withMotion from '@/components/withMotion'
import { Blog } from '@/types'
import { decodeUnicodeEscapes, formatDate } from '@/utils'

const MotionCard = withMotion(Card)
const MotionCardMedia = motion(CardMedia)

export default function Posts({ data }: { data: Blog[] }) {
  const theme = useTheme()
  return (
    <ScrollSection header="Latest Blog Posts" name="Blog Posts">
      <Grid container spacing={2} mt={2}>
        {data.slice(0, 4).map(({ title, pubDate, link, description }) => {
          const root = parse(decodeUnicodeEscapes(description))
          const image = root.querySelector('.medium-feed-image img')?.getAttribute('src')
          const content = root.querySelector('.medium-feed-snippet')?.innerText || ''
          const mediaHeight = theme.spacing(20)
          return (
            <Grid
              size={{ xs: 12, sm: 6 }}
              key={title}
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
              <MotionCard initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}>
                <div>
                  {image ? (
                    <Link href={link} color="inherit" target="_blank" rel="noopener">
                      <MotionCardMedia
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        sx={{
                          height: mediaHeight,
                        }}
                        image={image}
                      />
                    </Link>
                  ) : (
                    <Skeleton variant="rectangular" height={mediaHeight} />
                  )}
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {content}
                    </Typography>
                  </CardContent>
                </div>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                  <Typography variant="body2" component={Stack} direction="row" alignItems="center" spacing={0.5}>
                    <MdPublish />
                    <div>{formatDate(pubDate)}</div>
                  </Typography>
                  <Chip
                    label="Read"
                    color="primary"
                    component="a"
                    icon={<MdRemoveRedEye />}
                    href={link}
                    clickable
                    target="_blank"
                    rel="noopener"
                  />
                </CardActions>
              </MotionCard>
            </Grid>
          )
        })}
      </Grid>
    </ScrollSection>
  )
}
