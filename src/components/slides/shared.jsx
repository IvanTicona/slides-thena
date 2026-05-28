import { motion } from 'framer-motion'

export function SectionLabel({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        fontSize: 11, fontWeight: 800, letterSpacing: 5,
        color: '#6D9EEB', textTransform: 'uppercase', marginBottom: 4,
      }}
    >
      {children}
    </motion.div>
  )
}

export function Reveal({ show, delay = 0, from = 'bottom', children }) {
  const axes = {
    bottom: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    left:   { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
    right:  { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
    scale:  { initial: { opacity: 0, scale: 0.85 }, animate: { opacity: 1, scale: 1 } },
  }
  const ax = axes[from] || axes.bottom
  return (
    <motion.div
      initial={ax.initial}
      animate={show ? ax.animate : ax.initial}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
