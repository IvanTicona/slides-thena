import { motion } from 'framer-motion'

const FONT = "'Fira Sans Extra Condensed', Arial, sans-serif"

function ImageStack({ slide, continuedSection }) {
  if (slide.images) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        {slide.images.map((img, i) => (
          <motion.div
            key={i}
            initial={continuedSection ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
          >
            <div style={{
              border: '1px solid rgba(0,32,96,0.1)',
              borderRadius: 20, overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,32,96,0.1)',
            }}>
              <img
                src={img.src}
                alt={img.label}
                style={{ width: '100%', display: 'block' }}
              />
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
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <motion.div
        initial={continuedSection ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          border: '1px solid rgba(0,32,96,0.1)',
          borderRadius: 16, overflow: 'hidden',
          boxShadow: '0 8px 48px rgba(0,32,96,0.12)',
        }}
      >
        <img
          src={slide.src}
          alt={slide.label}
          style={{ width: '100%', display: 'block', objectFit: 'contain' }}
        />
      </motion.div>

      {slide.source && (
        <motion.div
          initial={continuedSection ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ borderLeft: '3px solid #1C4DC1', paddingLeft: 10 }}
        >
          <span style={{ fontFamily: FONT, fontSize: 16, fontWeight: 500, color: '#0a1628' }}>
            Fuente: {slide.source}
          </span>
        </motion.div>
      )}
    </div>
  )
}

export default function ImageDetailSlide({ slide, step }) {
  if (slide.bullets) {
    return (
      <div style={{ width: '100%', maxWidth: 1400, height: '100%', display: 'flex', gap: 48, alignItems: 'stretch' }}>

        {/* Izquierda: título + imagen */}
        <div style={{ flexShrink: 0, width: 230, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <motion.h2
            initial={slide.continuedSection ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              fontFamily: FONT, fontSize: 72, fontWeight: 700,
              color: '#1C4DC1', textTransform: 'uppercase', margin: 0,
            }}
          >
            {slide.section}
          </motion.h2>

          <ImageStack slide={slide} continuedSection={slide.continuedSection} />
        </div>

        {/* Derecha: bullets */}
        <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
          {slide.bullets.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={step > i ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderLeft: '3px solid #1C4DC1', paddingLeft: 12 }}
            >
              <span style={{ fontFamily: FONT, fontSize: 42, fontWeight: 500, color: '#0a1628', lineHeight: 1.3 }}>
                {b}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  // Layout simple (sin bullets)
  return (
    <div style={{
      width: '100%', maxWidth: 900,
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
    }}>
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          fontFamily: FONT, fontSize: 72, fontWeight: 700, letterSpacing: 0,
          color: '#1C4DC1', textTransform: 'uppercase', margin: 0,
          alignSelf: 'flex-start',
        }}
      >
        {slide.section}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '100%',
          border: '1px solid rgba(0,32,96,0.1)',
          borderRadius: 16, overflow: 'hidden',
          boxShadow: '0 8px 48px rgba(0,32,96,0.12)',
        }}
      >
        <img
          src={slide.src}
          alt={slide.label}
          style={{ width: '100%', display: 'block', objectFit: 'contain', maxHeight: 460 }}
        />
      </motion.div>

      {slide.source && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          style={{ borderLeft: '3px solid #1C4DC1', paddingLeft: 10, alignSelf: 'flex-start' }}
        >
          <span style={{ fontFamily: FONT, fontSize: 16, fontWeight: 500, color: '#0a1628' }}>
            Fuente: {slide.source}
          </span>
        </motion.div>
      )}

      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        style={{ fontFamily: FONT, fontSize: 54, fontWeight: 700, color: '#0a1628', textAlign: 'center' }}
      >
        {slide.label}
      </motion.span>
    </div>
  )
}
