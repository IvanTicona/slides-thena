import { motion } from 'framer-motion'
import { SectionLabel } from './shared'

export default function StatsSlide({ slide, step }) {
  return (
    <div style={{ width: '100%', maxWidth: 900, textAlign: 'center' }}>
      <SectionLabel>{slide.section}</SectionLabel>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${slide.stats.length}, 1fr)`,
        gap: 24, marginTop: 48,
      }}>
        {slide.stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={step > i ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'rgba(0,32,96,0.03)',
              border: '1px solid rgba(109,158,235,0.25)',
              borderRadius: 20, padding: '40px 24px',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={step > i ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontSize: 64, fontWeight: 900, letterSpacing: -2,
                background: i === 0
                  ? 'linear-gradient(135deg, #6D9EEB, #fff)'
                  : i === 1
                  ? 'linear-gradient(135deg, #D90368, #ff6b9d)'
                  : 'linear-gradient(135deg, #00b4d8, #90e0ef)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}
            >
              {stat.value}
            </motion.div>
            <p style={{
              fontSize: 13, color: 'rgba(0,32,96,0.6)',
              lineHeight: 1.6, marginTop: 16,
            }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
