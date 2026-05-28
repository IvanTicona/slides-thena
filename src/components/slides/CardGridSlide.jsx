import { motion } from 'framer-motion'

const FONT = "'Fira Sans Extra Condensed', Arial, sans-serif"

export default function CardGridSlide({ slide, step }) {
  return (
    <div style={{ width: '100%', maxWidth: 1100, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

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

      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${slide.cards.length}, 1fr)`,
        gap: 24, flex: 1, paddingTop: 24,
      }}>
        {slide.cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={step > i ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex', flexDirection: 'column',
              background: 'rgba(0,32,96,0.02)',
              border: `1px solid ${card.color}33`,
              borderTop: `4px solid ${card.color}`,
              borderRadius: 16, padding: '20px 20px 24px',
            }}
          >
            {/* Imagen + fuente juntas */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(0,32,96,0.08)', height: 220 }}>
                <img src={card.image} alt={card.label} style={{ width: '100%', height: '100%', display: 'block', objectFit: 'fill' }} />
              </div>
              {card.source && (
                <div style={{ borderLeft: `3px solid ${card.color}`, paddingLeft: 10 }}>
                  <span style={{ fontFamily: FONT, fontSize: 16, fontWeight: 500, color: '#0a1628' }}>
                    Fuente: {card.source}
                  </span>
                </div>
              )}
            </div>

            {/* Label */}
            <h3 style={{
              fontFamily: FONT, fontSize: 40, fontWeight: 700,
              color: card.color, margin: 0, marginTop: 36, textTransform: 'uppercase',
            }}>
              {card.label}
            </h3>

            {/* Texto */}
            <p style={{
              fontFamily: FONT, fontSize: 26, fontWeight: 500,
              color: '#0a1628', lineHeight: 1.4, margin: 0, marginTop: 30,
            }}>
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
