import { motion } from 'framer-motion'
import { SectionLabel } from './shared'

function Column({ col, show, from }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from === 'left' ? -40 : 40 }}
      animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: from === 'left' ? -40 : 40 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{
        flex: 1,
        background: `${col.color}0d`,
        border: `1px solid ${col.color}33`,
        borderTop: `3px solid ${col.color}`,
        borderRadius: 16, padding: '28px 24px',
      }}
    >
      <h3 style={{
        fontSize: 12, fontWeight: 800, letterSpacing: 3,
        color: col.color, marginBottom: 20, textTransform: 'uppercase',
      }}>
        {col.label}
      </h3>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {col.items.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <span style={{ color: col.color, flexShrink: 0, marginTop: 2 }}>▸</span>
            <span style={{ fontSize: 14, color: 'rgba(0,32,96,0.78)', lineHeight: 1.55 }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function TwoColumnSlide({ slide, step }) {
  return (
    <div style={{ width: '100%', maxWidth: 960 }}>
      <SectionLabel>{slide.section}</SectionLabel>
      <div style={{ display: 'flex', gap: 24, marginTop: 32 }}>
        <Column col={slide.left}  show={step >= 1} from="left" />
        <Column col={slide.right} show={step >= 2} from="right" />
      </div>
    </div>
  )
}
