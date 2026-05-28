import { motion, AnimatePresence } from 'framer-motion'

const FONT = "'Fira Sans Extra Condensed', Arial, sans-serif"

export default function IshikawaSlide({ slide, step }) {
  const zone = slide.zones[step] ?? slide.zones[0]

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>

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

      {/* Viewport con overflow hidden — la imagen se mueve dentro */}
      <div style={{
        flex: 1, minHeight: 0,
        overflow: 'hidden',
        borderRadius: 16,
        border: '1px solid rgba(0,32,96,0.08)',
        boxShadow: '0 4px 32px rgba(0,32,96,0.08)',
        position: 'relative',
      }}>
        <motion.div
          animate={{ scale: zone.scale, x: zone.x, y: zone.y }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: '100%', height: '100%', transformOrigin: 'center center' }}
        >
          <img
            src={slide.image}
            alt={slide.section}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        </motion.div>

        {/* Label de la zona actual */}
        <AnimatePresence mode="wait">
          {step > 0 && (
            <motion.div
              key={zone.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute', bottom: 16, left: 16,
                background: 'rgba(28,77,193,0.88)',
                backdropFilter: 'blur(8px)',
                borderRadius: 8, padding: '6px 16px',
              }}
            >
              <span style={{
                fontFamily: FONT, fontSize: 28, fontWeight: 700,
                color: '#ffffff', letterSpacing: 1,
              }}>
                {zone.label}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Indicador de zona: puntos */}
        <div style={{
          position: 'absolute', bottom: 16, right: 16,
          display: 'flex', gap: 6,
        }}>
          {slide.zones.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === step ? 20 : 8,
                height: 8,
                borderRadius: 4,
                background: i === step ? '#1C4DC1' : 'rgba(28,77,193,0.25)',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
