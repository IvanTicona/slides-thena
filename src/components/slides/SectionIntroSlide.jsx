import { motion } from 'framer-motion'

export default function SectionIntroSlide({ slide }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
      {/* Full bleed image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${slide.image})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'brightness(0.35)',
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(6,12,26,0.95) 30%, transparent 70%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'flex-end',
        height: '100%', padding: '0 80px 80px',
        textAlign: 'center',
      }}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 5,
            color: '#6D9EEB', marginBottom: 16,
          }}
        >
          {slide.section}
        </motion.span>

        {slide.caption && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 22, fontWeight: 500,
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.6, maxWidth: 720,
            }}
          >
            {slide.caption}
          </motion.p>
        )}
      </div>
    </div>
  )
}
