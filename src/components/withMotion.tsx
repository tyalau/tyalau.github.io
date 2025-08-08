'use client'

import { ElementType, ComponentPropsWithoutRef, RefAttributes } from 'react'
import Stack from '@mui/material/Stack'
import { motion, MotionProps } from 'motion/react'
import SectionHeader from '@/components/SectionHeader'

type WithComponentProp<T extends ElementType, R = HTMLElement> = ComponentPropsWithoutRef<T> &
  MotionProps &
  RefAttributes<R> & {
    component?: React.ElementType
  }

const defaultMotionProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export default function withMotion<T extends ElementType>(Component: T) {
  const MotionComponent = motion(Component)

  const WrappedComponent = (props: WithComponentProp<T>) => <MotionComponent {...defaultMotionProps} {...props} />

  return WrappedComponent
}

export const MotionSectionHeader = withMotion(SectionHeader)
export const MotionStack = withMotion(Stack)
