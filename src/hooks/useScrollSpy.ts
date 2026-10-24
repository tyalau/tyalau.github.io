import { useEffect, useRef, useState } from 'react'
import { NAV_HEIGHT } from '@/constants'
import { scrollToSection } from '@/utils'

// Fallback for browsers without the scrollend event, or when the page is already at the target
const SCROLL_UNLOCK_MS = 1000

// Tracks which of the given sections is in view and jumps to one; tracking pauses while a click-scroll runs
export const useScrollSpy = (ids: string[]) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const isScrollingToSection = useRef(false)
  const unlockTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(unlockTimer.current), [])

  useEffect(() => {
    const visible = new Set<number>()

    // Active band: from just below the nav bar to half way down the viewport. Wide enough that a short last section
    // still reaches it when the page is scrolled to the bottom
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          const index = ids.indexOf(target.id)
          if (isIntersecting) visible.add(index)
          else visible.delete(index)
        })

        if (isScrollingToSection.current || visible.size === 0) return
        setActiveIndex(Math.max(...visible))
      },
      { rootMargin: `-${NAV_HEIGHT}px 0px -50% 0px` }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  const scrollTo = (index: number) => {
    // Pause tracking while the animation runs so the active tab doesn't flicker through intermediate sections
    isScrollingToSection.current = true
    setActiveIndex(index)

    const unlock = () => {
      isScrollingToSection.current = false
      window.removeEventListener('scrollend', unlock)
      clearTimeout(unlockTimer.current)
    }
    window.addEventListener('scrollend', unlock, { once: true })
    clearTimeout(unlockTimer.current)
    unlockTimer.current = setTimeout(unlock, SCROLL_UNLOCK_MS)

    scrollToSection(ids[index])
  }

  return { activeIndex, scrollTo }
}
