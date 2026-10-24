'use client'

import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import { alpha } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { CgClose } from 'react-icons/cg'
import { HiOutlineMenu } from 'react-icons/hi'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import ScrollProgress from '@/components/ScrollProgress'
import { NAV_HEIGHT, NAV_SECTIONS } from '@/constants'

type NavBarProps = {
  slug: string
}

export default function NavBar({ slug }: NavBarProps) {
  const { activeIndex, scrollTo } = useScrollSpy(NAV_SECTIONS)

  // Glass effect once the page has scrolled
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => setIsScrolled(y > 8))

  // Mobile menu; open whenever it has an anchor element
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)
  const isMobileMenuOpen = Boolean(menuAnchor)

  return (
    <AppBar
      position="fixed"
      component="nav"
      elevation={0}
      sx={(theme) => ({
        backgroundImage: 'none',
        backgroundColor: isScrolled ? alpha(theme.palette.background.default, 0.7) : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${isScrolled ? alpha(theme.palette.primary.main, 0.3) : 'transparent'}`,
        boxShadow: isScrolled ? theme.glow(theme.palette.primary.main, 0.5) : 'none',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      })}
    >
      <Toolbar sx={{ minHeight: NAV_HEIGHT, justifyContent: { xs: 'flex-start', sm: 'space-between' } }}>
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton onClick={(event) => setMenuAnchor(event.currentTarget)}>
            {isMobileMenuOpen ? <CgClose /> : <HiOutlineMenu />}
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={isMobileMenuOpen}
            onClose={() => setMenuAnchor(null)}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            {NAV_SECTIONS.map((label, i) => (
              <MenuItem
                key={label}
                onClick={() => {
                  scrollTo(i)
                  setMenuAnchor(null)
                }}
              >
                <Typography>{label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Stack
          direction="row"
          sx={{
            flex: {
              xs: 1,
              sm: 0,
            },
            justifyContent: 'center',
          }}
        >
          <Typography component="div" variant="body1" pb={0.5} className="mono-font gradient-text" noWrap>
            &lt;{slug} /&gt;
          </Typography>
        </Stack>
        <Tabs value={activeIndex} onChange={(_, value) => scrollTo(value)} sx={{ display: { xs: 'none', sm: 'inherit' } }}>
          {NAV_SECTIONS.map((label) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
      </Toolbar>
      <ScrollProgress />
    </AppBar>
  )
}
