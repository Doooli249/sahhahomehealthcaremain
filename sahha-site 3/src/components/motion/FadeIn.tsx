'use client'

import { motion, type Variants } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type FadeInProps = PropsWithChildren<{
  className?: string
  delay?: number
  y?: number
}>

const makeVariants = (y: number, delay: number): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
})

export function FadeIn({ children, className, delay = 0, y = 18 }: FadeInProps) {
  return (
    <motion.div
      className={className}
      variants={makeVariants(y, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  )
}
