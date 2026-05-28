import { motion } from 'framer-motion'

export default function TextFigureSlide({ slide }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 56,
      width: '100%', maxWidth: 1100,
    }}>
      {/* Left: title + text */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 28 }}>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "'Fira Sans Extra Condensed', Arial, sans-serif",
            fontSize: 72, fontWeight: 700, letterSpacing: 0,
            color: '#1C4DC1', textTransform: 'uppercase', margin: 0,
          }}
        >
          {slide.section}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Fira Sans Extra Condensed', Arial, sans-serif",
            fontSize: 54, fontWeight: 500, lineHeight: 1.4,
            color: '#0a1628', margin: 0,
          }}
        >
          {slide.text}
        </motion.p>
      </div>

      {/* Right: figure with source */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{
          flexShrink: 0, width: 460,
          display: 'flex', flexDirection: 'column', gap: 10,
        }}
      >
        <div style={{
          border: '1px solid rgba(0,32,96,0.1)',
          borderRadius: 12, overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0,32,96,0.07)',
        }}>
          <img
            src={slide.image}
            alt={slide.caption || slide.section}
            style={{ width: '100%', display: 'block', objectFit: 'contain' }}
          />
        </div>

        {slide.source && (
          <div style={{
            borderLeft: '3px solid #1C4DC1',
            paddingLeft: 10,
          }}>
            <span style={{
              fontFamily: "'Fira Sans Extra Condensed', Arial, sans-serif",
              fontSize: 13, fontWeight: 500,
              color: '#0a1628',
            }}>
              Fuente: {slide.source}
            </span>
          </div>
        )}
      </motion.div>
    </div>
  )
}
