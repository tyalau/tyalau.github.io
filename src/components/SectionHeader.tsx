import Typography from '@mui/material/Typography'

export default function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Typography variant="h5" className="gradient-text">
        {children}
      </Typography>
    </div>
  )
}
