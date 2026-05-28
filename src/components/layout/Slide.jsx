import { motion } from 'framer-motion'

const X_MAP = { left: -480, center: 0, right: 480 }

function makeVariants(exitType, exitDirection, enterType, continuedSection, continuesSection) {
  const xOut = X_MAP[exitDirection] ?? 0

  const enter = continuedSection
    ? { opacity: 1, scale: 1, x: 0 }
    : enterType === 'fade'
      ? { opacity: 0, scale: 1, x: 0 }
      : { opacity: 0, scale: 0.95, x: 0 }

  const center = { opacity: 1, scale: 1, x: 0 }

  let exit
  if (continuesSection) {
    exit = { opacity: 1, scale: 1, x: 0 }  // sin fade en salida — título "se queda"
  } else if (exitType === 'zoom-in') {
    exit = { opacity: 0, scale: 2.2,  x: -xOut * 1.4 }
  } else if (exitType === 'zoom-out') {
    exit = { opacity: 0, scale: 0.3,  x: xOut * 0.9 }
  } else {
    exit = { opacity: 0, scale: 0.95, x: 0 }
  }

  return { enter, center, exit }
}

export default function Slide({ slide, children }) {
  const variants = makeVariants(slide.exitType, slide.exitDirection, slide.enterType, slide.continuedSection, slide.continuesSection)
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#ffffff' }}>
      {/* Subtle grid background — estático */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(0,32,96,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,32,96,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Corner glows — estáticos */}
      <div style={{
        position: 'absolute', top: -200, right: -200,
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(109,158,235,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -150, left: -150,
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(217,3,104,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Solo el contenido anima */}
      <motion.div
        key={slide.id}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: slide.exitType ? 0.72 : 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '68px 60px 96px',
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
