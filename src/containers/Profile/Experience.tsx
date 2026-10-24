'use client'

import Timeline from '@mui/lab/Timeline'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { keyframes } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { HiLocationMarker, HiOutlineExternalLink } from 'react-icons/hi'
import DrawnConnector from '@/components/DrawnConnector'
import ScrollSection from '@/components/ScrollSection'
import withMotion, { withStagger } from '@/components/withMotion'
import { SECTIONS } from '@/constants'
import { Experience } from '@/types'

type ExperienceProps = {
  data: Experience[]
  slug: string
}

const MotionTimeline = withStagger(Timeline)
const MotionTimelineItem = withMotion(TimelineItem)

const ping = keyframes`
  from { transform: scale(1); opacity: 0.8; }
  to { transform: scale(2.4); opacity: 0; }
`

export default function ExperienceSection({ data, slug }: ExperienceProps) {
  return (
    <ScrollSection header="Experience" name={SECTIONS.experience}>
      <MotionTimeline>
        {data.map(({ title, company, duration, location, description }, i) => (
          <MotionTimelineItem key={duration}>
            <TimelineOppositeContent
              variant="body1"
              color="primary"
              sx={{ display: { xs: 'none', md: 'block' }, whiteSpace: 'nowrap' }}
            >
              {duration}
              <br />
              <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={0.5}>
                <HiLocationMarker />
                <Typography>{location}</Typography>
              </Stack>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                variant={i === 0 ? 'filled' : 'outlined'}
                color="primary"
                sx={
                  i === 0
                    ? {
                        position: 'relative',
                        boxShadow: (theme) => theme.glow(theme.palette.primary.main, 0.5),
                        // Current role: a ring that expands and fades
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          inset: -1,
                          borderRadius: '50%',
                          border: '2px solid',
                          borderColor: 'primary.main',
                          animation: `${ping} 2s ease-out infinite`,
                        },
                      }
                    : undefined
                }
              />
              <DrawnConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">{title}</Typography>
              {company && (
                <Typography variant="subtitle1" color="textSecondary">
                  {company}
                </Typography>
              )}
              <Typography
                variant="subtitle2"
                color="primary"
                component="div"
                sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}
              >
                <div>{duration}</div>
                <div>·</div>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <HiLocationMarker />
                  <Typography variant="body2">{location}</Typography>
                </Stack>
              </Typography>
              <ul>
                {description.map((d) => (
                  <li key={d}>
                    <Typography variant="body1">{d}</Typography>
                  </li>
                ))}
              </ul>
            </TimelineContent>
          </MotionTimelineItem>
        ))}
        <MotionTimelineItem>
          <TimelineOppositeContent sx={{ display: { xs: 'none', md: 'block' } }} />
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
          </TimelineSeparator>
          <TimelineContent>
            <Button
              endIcon={<HiOutlineExternalLink />}
              href={`https://www.linkedin.com/in/${slug}`}
              target="_blank"
              rel="noopener"
            >
              View full experience
            </Button>
          </TimelineContent>
        </MotionTimelineItem>
      </MotionTimeline>
    </ScrollSection>
  )
}
