import { motion } from 'framer-motion'

const FONT = "'Fira Sans Extra Condensed', Arial, sans-serif"

export default function FullImageSlide({ slide }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>

      {slide.section && (
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: FONT, fontSize: 72, fontWeight: 700,
            color: '#1C4DC1', textTransform: 'uppercase', margin: 0, flexShrink: 0,
          }}
        >
          {slide.section}
        </motion.h2>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ flex: 1, minHeight: 0, position: 'relative' }}
      >
        <img
          src={slide.image}
          alt={slide.label ?? slide.section}
          style={{
            width: '100%', height: '100%',
            objectFit: 'contain', display: 'block',
          }}
        />
      </motion.div>

      {slide.label && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ flexShrink: 0, textAlign: 'center' }}
        >
          <span style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.88)',
            border: '1px solid rgba(109,158,235,0.3)',
            borderRadius: 8, padding: '6px 18px',
            fontSize: 12, color: '#6D9EEB', letterSpacing: 2,
          }}>
            {slide.label}
          </span>
        </motion.div>
      )}
    </div>
  )
}
