import { motion } from 'framer-motion'

const item = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
})

export default function TitleSlide({ slide }) {
  if (slide.cover) {
    return (
      <div style={{ textAlign: 'center', maxWidth: 1160, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
        <motion.img
          {...item(0.1)}
          src={slide.logo}
          alt="Universidad Privada Boliviana"
          style={{ height: 150, objectFit: 'contain' }}
        />
        <motion.h1
          {...item(0.35)}
          style={{
            fontFamily: "'Fira Sans Extra Condensed', Arial, sans-serif",
            fontSize: 63, fontWeight: 600, lineHeight: 1.2,
            color: '#002060', letterSpacing: -1, margin: 0, textTransform: 'uppercase',
          }}
        >
          {slide.title}
        </motion.h1>
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center', maxWidth: 900 }}>
      <motion.div {...item(0.1)}>
        <div style={{ marginBottom: 8 }}>
          <span style={{
            fontSize: 13, fontWeight: 700, letterSpacing: 6,
            color: '#6D9EEB', textTransform: 'uppercase',
          }}>
            {slide.tag}
          </span>
        </div>
        <h1 style={{
          fontSize: 96, fontWeight: 900, letterSpacing: -2,
          color: '#1C4DC1',
          lineHeight: 1.05, marginBottom: 32,
        }}>
          {slide.title}
        </h1>
      </motion.div>

      {slide.subtitle && (
        <motion.p {...item(0.35)} style={{
          fontSize: 18, color: 'rgba(0,32,96,0.65)',
          lineHeight: 1.7, whiteSpace: 'pre-line', marginBottom: 48,
        }}>
          {slide.subtitle}
        </motion.p>
      )}

      <motion.div {...item(0.55)} style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <span style={{ fontSize: 32, fontWeight: 600, color: '#002060', textTransform: 'uppercase' }}>{slide.author}</span>
        <span style={{ fontSize: 26, color: 'rgba(0,32,96,0.55)', textTransform: 'uppercase' }}>{slide.degree}</span>
        {slide.institution && <span style={{ fontSize: 12, color: 'rgba(0,32,96,0.4)' }}>{slide.institution}</span>}
      </motion.div>
    </div>
  )
}
