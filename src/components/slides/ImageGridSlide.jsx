import { motion } from 'framer-motion'

export default function ImageGridSlide({ slide, step }) {
  return (
    <div style={{ width: '100%', maxWidth: 1100, display: 'flex', flexDirection: 'column', gap: 32 }}>

      {/* Título */}
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

      {/* Grid de imágenes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
        {slide.images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={slide.allVisible || step > i ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            <div style={{
              border: '1px solid rgba(0,32,96,0.1)',
              borderRadius: 12, overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,32,96,0.07)',
            }}>
              <img
                src={img.src}
                alt={img.label}
                style={{ width: '100%', display: 'block', objectFit: 'contain', height: 380 }}
              />
            </div>

            {/* Fuente — caption con acento */}
            {img.source && (
              <div style={{ borderLeft: '3px solid #1C4DC1', paddingLeft: 10 }}>
                <span style={{
                  fontFamily: "'Fira Sans Extra Condensed', Arial, sans-serif",
                  fontSize: 16, fontWeight: 500, color: '#0a1628',
                }}>
                  Fuente: {img.source}
                </span>
              </div>
            )}

            {/* Label */}
            <span style={{
              fontFamily: "'Fira Sans Extra Condensed', Arial, sans-serif",
              fontSize: 36, fontWeight: 700, color: '#0a1628',
              display: 'block', textAlign: 'center',
            }}>
              {img.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
