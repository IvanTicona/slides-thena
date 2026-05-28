import { motion } from 'framer-motion'

const FONT = "'Fira Sans Extra Condensed', Arial, sans-serif"

export default function BulletsSlide({ slide, step }) {
  if (slide.twoColumn) {
    return (
      <div style={{ width: '100%', maxWidth: 1300, height: '100%', display: 'flex', gap: 56, alignItems: 'stretch' }}>

        {/* Izquierda: título + label */}
        <div style={{ flexShrink: 0, width: 440, display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center' }}>
          <motion.h2
            initial={slide.continuedSection ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: FONT, fontSize: 72, fontWeight: 700,
              color: '#1C4DC1', textTransform: 'uppercase', margin: 0,
            }}
          >
            {slide.section}
          </motion.h2>

          <motion.span
            initial={slide.continuedSection ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ fontFamily: FONT, fontSize: 40, fontWeight: 700, color: '#0a1628' }}
          >
            {slide.label}
          </motion.span>
        </div>

        {/* Derecha: bullets */}
        <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
          {slide.bullets.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={step > i ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderLeft: '3px solid #1C4DC1', paddingLeft: 16 }}
            >
              <span style={{ fontFamily: FONT, fontSize: 38, fontWeight: 500, color: '#0a1628', lineHeight: 1.3 }}>
                {b}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    )
  }

  return (
    <div style={{ width: '100%', maxWidth: 1000, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <motion.h2
          initial={slide.continuedSection ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: FONT, fontSize: 72, fontWeight: 700,
            color: '#1C4DC1', textTransform: 'uppercase', margin: 0,
          }}
        >
          {slide.section}
        </motion.h2>

        <motion.span
          initial={slide.continuedSection ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{ fontFamily: FONT, fontSize: 54, fontWeight: 700, color: '#0a1628' }}
        >
          {slide.label}
        </motion.span>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', paddingTop: 16 }}>
        {slide.bullets.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={step > i ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{ borderLeft: '3px solid #1C4DC1', paddingLeft: 16 }}
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
