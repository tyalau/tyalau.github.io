'use client'

import { useEffect, useRef, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Toolbar from '@mui/material/Toolbar'
import { scroller } from 'react-scroll'

const sections = ['Tech Stack', 'Experience', 'Projects']

export default function NavBar() {
  const [activeTab, setActiveTab] = useState(0)
  const allowScrollUpdate = useRef(true)

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    allowScrollUpdate.current = false
    setActiveTab(newValue)

    scroller.scrollTo(sections[newValue], {
      smooth: true,
      duration: 500,
    })

    // Re-enable scroll detection after scroll animation ends
    setTimeout(() => {
      allowScrollUpdate.current = true
    }, 550)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!allowScrollUpdate.current) return

      const offsets = sections.map((id) => {
        const el = document.getElementById(id)
        return el ? el.getBoundingClientRect().top - 64 : Infinity
      })

      const index = offsets.findIndex((offset, i) => {
        const nextOffset = offsets[i + 1] ?? Infinity
        return offset <= 0 && nextOffset > 0
      })

      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10

      if (scrolledToBottom) {
        setActiveTab(sections.length - 1)
      } else if (index !== -1 && index !== activeTab) {
        setActiveTab(index)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeTab])

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Tabs value={activeTab} onChange={handleTabChange} textColor="inherit">
          {sections.map((label) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}
