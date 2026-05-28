import { motion } from 'framer-motion'

const FONT = "'Fira Sans Extra Condensed', Arial, sans-serif"

export default function FlowSlide({ slide, step }) {
  const n = slide.items.length

  return (
    <div style={{
      width: '100%', maxWidth: 1600, height: '100%',
      display: 'flex', flexDirection: 'column', gap: 48, justifyContent: 'flex-start',
    }}>

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

      {/* flex: 3 + spacer flex: 1 → row ocupa 3/4 del espacio disponible */}
      <div style={{ flex: 3, minHeight: 0, display: 'flex', alignItems: 'stretch' }}>
        {slide.items.flatMap((item, i) => [

          /* ── Card ── */
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: step > i ? 1 : 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              flex: 1, minWidth: 0,
              background: '#fff',
              border: '2px solid #1C4DC1',
              borderRadius: 16,
              padding: '16px 16px 14px',
              display: 'flex', flexDirection: 'column', gap: 10,
              boxShadow: '0 4px 20px rgba(28,77,193,0.10)',
            }}
          >
            {/* Título primero */}
            <span style={{
              fontFamily: FONT, fontSize: 30, fontWeight: 700,
              color: '#0a1628', lineHeight: 1.2, textAlign: 'center',
            }}>
              {item.label ?? item}
            </span>

            {/* Imagen debajo */}
            {item.image && (
              <div style={{ flex: 1, minHeight: 0, borderRadius: 10, overflow: 'hidden', marginTop: 20 }}>
                <img
                  src={item.image} alt={item.label}
                  style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }}
                />
              </div>
            )}
            {item.source && (
              <div style={{ borderLeft: '3px solid #1C4DC1', paddingLeft: 8 }}>
                <span style={{ fontFamily: FONT, fontSize: 16, fontWeight: 500, color: '#0a1628' }}>
                  Fuente: {item.source}
                </span>
              </div>
            )}
            <div style={{ flex: 0.25 }} />
          </motion.div>,

          /* ── Arrowhead (no tail) ── */
          i < n - 1 && (
            <motion.div
              key={`a${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: step > i + 1 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ flexShrink: 0, display: 'flex', alignItems: 'center', padding: '0 6px' }}
            >
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
                <polygon points="0,0 12,10 0,20" fill="#1C4DC1" />
              </svg>
            </motion.div>
          ),

        ]).filter(Boolean)}
      </div>

      <div style={{ flex: 1 }} />

    </div>
  )
}
