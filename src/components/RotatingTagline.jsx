import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Cycles through a list of role titles with a simple crossfade.
export default function RotatingTagline({ roles, interval = 2200 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length)
    }, interval)
    return () => clearInterval(id)
  }, [roles.length, interval])

  const text = roles[index]

  return (
    <span className="rotator">
      <AnimatePresence mode="wait">
        <motion.span
          key={text}
          className="rotator-role"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
