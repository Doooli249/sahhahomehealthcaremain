'use client'

import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type StaggerProps = PropsWithChildren<{ className?: string; delayChildren?: number; staggerChildren?: number }>

export function Stagger({ children, className, delayChildren = 0.05, staggerChildren = 0.08 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        show: {
          transition: { delayChildren, staggerChildren },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
