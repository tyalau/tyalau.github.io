'use client'

import { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Toolbar from '@mui/material/Toolbar'
import { scroller } from 'react-scroll'

const sections = ['Tech Stack', 'Experience', 'Projects']

export default function App() {
  const [activeTab, setActiveTab] = useState(0)

  // Smooth scroll on tab click
  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
    scroller.scrollTo(sections[newValue], {
      smooth: true,
      duration: 500,
    })
  }

  // Update active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
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
        return
      }

      if (index !== -1 && index !== activeTab) {
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
