import { motion } from 'framer-motion'

const item = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
})

export default function PersonalSlide({ slide }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: 48, width: '100%', maxWidth: 1200,
    }}>
      {/* Left: name + text */}
      <div style={{ flex: 1, minWidth: 0, maxWidth: 880, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <motion.h1 {...item(0.1)} style={{
          fontFamily: "'Fira Sans Extra Condensed', Arial, sans-serif",
          fontSize: 78, fontWeight: 700, lineHeight: 1.1,
          color: '#1C4DC1', margin: 0, textTransform: 'uppercase',
        }}>
          {slide.name}
        </motion.h1>

        <motion.div {...item(0.3)} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{
            fontFamily: "'Fira Sans Extra Condensed', Arial, sans-serif",
            fontSize: 55, fontWeight: 600, lineHeight: 1.4,
            color: '#0a1628',
          }}>
            {slide.requirement}
          </span>
          {slide.career && (
            <span style={{
              fontFamily: "'Fira Sans Extra Condensed', Arial, sans-serif",
              fontSize: 55, fontWeight: 700, lineHeight: 1.2,
              color: '#1C4DC1',
            }}>
              {slide.career}
            </span>
          )}
        </motion.div>
      </div>

      {/* Right: photo */}
      <motion.img
        {...item(0.5)}
        src={slide.photo}
        alt={slide.name}
        style={{
          width: 260, height: 320,
          objectFit: 'cover', objectPosition: 'center top',
          borderRadius: 16,
          flexShrink: 0,
        }}
      />
    </div>
  )
}
