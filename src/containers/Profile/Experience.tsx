import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { Experience } from '@/types'

type ExperienceProps = {
  data: Experience[]
}

export default async function ExperienceSection({ data }: ExperienceProps) {
  return (
    <Stack>
      <div>
        <Typography variant="h4" className="gradient-text">
          Experience
        </Typography>
      </div>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.3,
          },
          [`& .${timelineItemClasses.root}::before`]: {
            display: 'none',
          },
          '& ul': {
            paddingInlineStart: 2,
          },
        }}
      >
        {data.map(({ title, company, duration, location, description }, i) => (
          <TimelineItem key={duration}>
            <TimelineOppositeContent variant="body1" color="primary" sx={{ display: { xs: 'none', md: 'block' } }}>
              {duration}
              <br />
              {location}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant={i === 0 ? 'filled' : 'outlined'} color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">{title}</Typography>
              {company && (
                <Typography variant="subtitle1" color="textSecondary">
                  {company}
                </Typography>
              )}
              <Typography variant="subtitle2" color="textSecondary" sx={{ display: { xs: 'block', md: 'none' } }}>
                {duration} · {location}
              </Typography>
              <ul>
                {description.map((d) => (
                  <li key={d}>
                    <Typography variant="body1">{d}</Typography>
                  </li>
                ))}
              </ul>
            </TimelineContent>
          </TimelineItem>
        ))}
        <TimelineItem>
          <TimelineOppositeContent sx={{ display: { xs: 'none', md: 'block' } }} />
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
          </TimelineSeparator>
          <TimelineContent>
            <Button
              variant="contained"
              endIcon={<HiOutlineExternalLink />}
              href={`https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USERNAME}`}
              target="_blank"
              rel="noopener"
            >
              View more experience
            </Button>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Stack>
  )
}
