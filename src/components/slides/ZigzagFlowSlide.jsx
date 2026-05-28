import { motion } from 'framer-motion'

const FONT = "'Fira Sans Extra Condensed', Arial, sans-serif"

function Card({ item, visible, cardWidth, imageHeight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{
        width: cardWidth,
        background: '#fff',
        border: '2px solid #1C4DC1',
        borderRadius: 16,
        padding: '16px 16px 14px',
        display: 'flex', flexDirection: 'column', gap: 10,
        boxShadow: '0 4px 20px rgba(28,77,193,0.10)',
      }}
    >
      {item.image && (
        <div style={{ borderRadius: 10, overflow: 'hidden', height: imageHeight }}>
          <img src={item.image} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }} />
        </div>
      )}
      {item.source && (
        <div style={{ borderLeft: '3px solid #1C4DC1', paddingLeft: 8 }}>
          <span style={{ fontFamily: FONT, fontSize: 13, fontWeight: 500, color: '#0a1628' }}>
            Fuente: {item.source}
          </span>
        </div>
      )}
      <span style={{ fontFamily: FONT, fontSize: 28, fontWeight: 700, color: '#0a1628', lineHeight: 1.2, textAlign: 'center' }}>
        {item.label}
      </span>
    </motion.div>
  )
}

function ArrowH({ visible, direction = 'right' }) {
  const flip = direction === 'left' ? 'scaleX(-1)' : undefined
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      animate={visible ? { opacity: 1, scale: [0.4, 1.18, 0.95, 1.05, 1] } : { opacity: 0, scale: 0.4 }}
      transition={{ duration: 0.6, times: [0, 0.4, 0.65, 0.82, 1], ease: 'easeOut' }}
      style={{ padding: '0 10px', flexShrink: 0, display: 'flex', alignItems: 'center', transform: flip }}
    >
      <svg width="56" height="28" viewBox="0 0 56 28" fill="none">
        <path d="M2 14 H42" stroke="#1C4DC1" strokeWidth="3" strokeLinecap="round" />
        <polygon points="38,5 54,14 38,23" fill="#1C4DC1" />
      </svg>
    </motion.div>
  )
}

function ArrowDown({ visible }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      animate={visible ? { opacity: 1, scale: [0.4, 1.18, 0.95, 1.05, 1] } : { opacity: 0, scale: 0.4 }}
      transition={{ duration: 0.6, times: [0, 0.4, 0.65, 0.82, 1], ease: 'easeOut' }}
      style={{ display: 'flex', justifyContent: 'center', padding: '6px 0' }}
    >
      <svg width="28" height="52" viewBox="0 0 28 52" fill="none">
        <path d="M14 2 V42" stroke="#1C4DC1" strokeWidth="3" strokeLinecap="round" />
        <polygon points="5,38 14,50 23,38" fill="#1C4DC1" />
      </svg>
    </motion.div>
  )
}

export default function ZigzagFlowSlide({ slide, step }) {
  const items = slide.items
  const cw = slide.cardWidth ?? 240
  const ih = slide.imageHeight ?? 120

  return (
    <div style={{ width: '100%', maxWidth: 1300, display: 'flex', flexDirection: 'column', gap: 40 }}>

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

      {/* Grid: 5 cols (card|arrow|card|arrow|card), 3 rows (top|connector|bottom) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `${cw}px auto ${cw}px auto ${cw}px`,
        gridTemplateRows: 'auto auto auto',
        alignItems: 'center',
        justifyItems: 'center',
      }}>
        {/* Fila 1 */}
        <div style={{ gridColumn: 1, gridRow: 1, justifySelf: 'stretch' }}>
          <Card item={items[0]} visible={step > 0} cardWidth={cw} imageHeight={ih} />
        </div>
        <div style={{ gridColumn: 2, gridRow: 1 }}>
          <ArrowH visible={step > 1} direction="right" />
        </div>
        <div style={{ gridColumn: 3, gridRow: 1, justifySelf: 'stretch' }}>
          <Card item={items[1]} visible={step > 1} cardWidth={cw} imageHeight={ih} />
        </div>
        <div style={{ gridColumn: 4, gridRow: 1 }}>
          <ArrowH visible={step > 2} direction="right" />
        </div>
        <div style={{ gridColumn: 5, gridRow: 1, justifySelf: 'stretch' }}>
          <Card item={items[2]} visible={step > 2} cardWidth={cw} imageHeight={ih} />
        </div>

        {/* Fila 2: flecha abajo en col 5 */}
        <div style={{ gridColumn: 5, gridRow: 2, justifySelf: 'center' }}>
          <ArrowDown visible={step > 3} />
        </div>

        {/* Fila 3: card5 en col3, ← en col4, card4 en col5 */}
        <div style={{ gridColumn: 3, gridRow: 3, justifySelf: 'stretch' }}>
          <Card item={items[4]} visible={step > 4} cardWidth={cw} imageHeight={ih} />
        </div>
        <div style={{ gridColumn: 4, gridRow: 3 }}>
          <ArrowH visible={step > 4} direction="left" />
        </div>
        <div style={{ gridColumn: 5, gridRow: 3, justifySelf: 'stretch' }}>
          <Card item={items[3]} visible={step > 3} cardWidth={cw} imageHeight={ih} />
        </div>
      </div>

    </div>
  )
}
