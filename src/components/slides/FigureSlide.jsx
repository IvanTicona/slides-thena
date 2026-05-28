import { motion } from 'framer-motion'
import { SectionLabel } from './shared'

export default function FigureSlide({ slide }) {
  return (
    <div style={{
      width: '100%', maxWidth: 960,
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
    }}>
      <SectionLabel>{slide.section}</SectionLabel>

      {/* Image container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '100%',
          border: '1px solid rgba(0,32,96,0.1)',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0,32,96,0.07)',
        }}
      >
        <img
          src={slide.image}
          alt={slide.caption}
          style={{ width: '100%', display: 'block', objectFit: 'contain', maxHeight: 400 }}
        />
      </motion.div>

      {/* Caption + source */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4,
          borderLeft: '3px solid #1C4DC1',
          paddingLeft: 10, width: '100%',
        }}
      >
        {slide.caption && (
          <span style={{
            fontFamily: "'Fira Sans Extra Condensed', Arial, sans-serif",
            fontSize: 15, fontWeight: 600, color: '#0a1628', letterSpacing: '-0.2px',
            textAlign: 'center',
          }}>
            {slide.caption}
          </span>
        )}
        {slide.source && (
          <span style={{
            fontFamily: "'Fira Sans Extra Condensed', Arial, sans-serif",
            fontSize: 12, fontWeight: 400, color: '#0a1628',
            textAlign: 'center',
          }}>
            Fuente: {slide.source}
          </span>
        )}
      </motion.div>
    </div>
  )
}
