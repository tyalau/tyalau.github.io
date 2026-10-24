'use client'

import { ElementType, ComponentPropsWithoutRef, RefAttributes, createContext, useContext, useMemo } from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { motion, MotionProps, useReducedMotion, Variants } from 'motion/react'
import SectionHeader from '@/components/SectionHeader'

type WithComponentProp<T extends ElementType, R = HTMLElement> = ComponentPropsWithoutRef<T> &
  MotionProps &
  RefAttributes<R> & {
    component?: React.ElementType
  }

export type MotionKind = 'fadeUp' | 'scaleIn' | 'pop'

const hiddenStates: Record<MotionKind, { opacity: number; y?: number; scale?: number }> = {
  fadeUp: { opacity: 0, y: 30 },
  scaleIn: { opacity: 0, scale: 0.9 },
  pop: { opacity: 0, scale: 0.8 },
}

const visibleStates: Record<MotionKind, { opacity: number; y?: number; scale?: number }> = {
  fadeUp: { opacity: 1, y: 0 },
  scaleIn: { opacity: 1, scale: 1 },
  pop: { opacity: 1, scale: 1 },
}

const transition = { duration: 0.5, ease: 'easeOut' } as const

const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition },
}

// With reduced motion every kind collapses to an opacity-only fade
export const useItemVariants = (kind: MotionKind): Variants => {
  const reduceMotion = useReducedMotion()

  return useMemo(
    () => (reduceMotion ? reducedVariants : { hidden: hiddenStates[kind], visible: { ...visibleStates[kind], transition } }),
    [kind, reduceMotion]
  )
}

// Items inside a stagger container inherit its hidden/visible state instead of observing the viewport themselves
const StaggerContext = createContext(false)

export default function withMotion<T extends ElementType>(Component: T, kind: MotionKind = 'fadeUp') {
  const MotionComponent = motion.create(Component)

  const WrappedComponent = (props: WithComponentProp<T>) => {
    const variants = useItemVariants(kind)
    const inStagger = useContext(StaggerContext)

    const triggerProps = inStagger ? {} : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.2 } }

    return <MotionComponent variants={variants} {...triggerProps} {...props} />
  }

  return WrappedComponent
}

export const withStagger = <T extends ElementType>(Component: T, staggerChildren = 0.08) => {
  const MotionComponent = motion.create(Component)

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren } },
  }

  const WrappedComponent = (props: WithComponentProp<T>) => (
    <StaggerContext.Provider value>
      <MotionComponent
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        {...props}
      />
    </StaggerContext.Provider>
  )

  return WrappedComponent
}

export const MotionSectionHeader = withMotion(SectionHeader)
export const MotionStack = withMotion(Stack)
export const MotionStagger = withStagger(Stack)
export const MotionGrid = withStagger(Grid, 0.1)
