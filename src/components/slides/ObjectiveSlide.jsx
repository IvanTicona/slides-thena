import { motion } from 'framer-motion'

const FONT = "'Fira Sans Extra Condensed', Arial, sans-serif"

export default function ObjectiveSlide({ slide }) {
  return (
    <div style={{ width: '100%', maxWidth: 1000, display: 'flex', flexDirection: 'column', gap: 32 }}>

      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: FONT, fontSize: 72, fontWeight: 700,
          color: '#1C4DC1', textTransform: 'uppercase', margin: 0,
        }}
      >
        {slide.section}
      </motion.h2>

      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        style={{ fontFamily: FONT, fontSize: 54, fontWeight: 700, color: '#0a1628' }}
      >
        {slide.label}
      </motion.span>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: FONT, fontSize: 48, fontWeight: 500,
          color: '#0a1628', lineHeight: 1.5, margin: 0,
          borderLeft: '4px solid #1C4DC1', paddingLeft: 24,
        }}
      >
        {slide.text}
      </motion.p>

    </div>
  )
}
