import { motion } from 'framer-motion'

const FONT = "'Fira Sans Extra Condensed', Arial, sans-serif"

export default function AgendaSlide({ slide, step }) {
  return (
    <div style={{
      width: '100%', maxWidth: 1300, height: '100%',
      display: 'flex', gap: 56, alignItems: 'stretch',
    }}>

      {/* Columna izquierda — título */}
      <div style={{ flexShrink: 0, width: 320, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
      </div>

      {/* Columna derecha — items */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
        {slide.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={step > i ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex', alignItems: 'center', gap: 20,
              padding: '12px 28px',
              background: step > i ? 'rgba(109,158,235,0.1)' : 'rgba(0,32,96,0.03)',
              border: `1px solid ${step > i ? 'rgba(109,158,235,0.35)' : 'rgba(0,32,96,0.09)'}`,
              borderRadius: 12,
            }}
          >
            <span style={{
              fontFamily: FONT, fontSize: 32, fontWeight: 800, letterSpacing: 2,
              color: step > i ? '#1C4DC1' : 'rgba(0,32,96,0.25)',
              minWidth: 28,
            }}>
              {item.num}
            </span>
            <span style={{
              fontFamily: FONT, fontSize: 40,
              fontWeight: step > i ? 600 : 400,
              color: step > i ? '#002060' : 'rgba(0,32,96,0.35)',
            }}>
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>

    </div>
  )
}
