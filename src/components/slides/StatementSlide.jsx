import { motion } from 'framer-motion'

const FONT = "'Fira Sans Extra Condensed', Arial, sans-serif"

export default function StatementSlide({ slide }) {
  return (
    <div style={{ width: '100%', maxWidth: 1100, display: 'flex', gap: 48, alignItems: 'stretch' }}>

      {/* Izquierda: imágenes + fuente */}
      {slide.images && (
        <div style={{ flexShrink: 0, width: 255, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {slide.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
            >
              <div style={{
                border: '1px solid rgba(0,32,96,0.1)',
                borderRadius: 20, overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,32,96,0.08)',
              }}>
                <img src={img.src} alt="" style={{ width: '100%', display: 'block' }} />
              </div>
              {img.source && (
                <div style={{ borderLeft: '3px solid #1C4DC1', paddingLeft: 10 }}>
                  <span style={{ fontFamily: FONT, fontSize: 16, fontWeight: 500, color: '#0a1628' }}>
                    Fuente: {img.source}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Derecha: título + pregunta */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40 }}>

        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: FONT, fontSize: 72, fontWeight: 700,
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
            fontFamily: FONT, fontSize: 54, fontWeight: 600,
            color: '#0a1628', lineHeight: 1.4, margin: 0,
            borderLeft: '4px solid #1C4DC1', paddingLeft: 24,
          }}
        >
          {slide.statement}
        </motion.p>

      </div>
    </div>
  )
}
