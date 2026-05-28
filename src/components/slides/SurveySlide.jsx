import { motion } from 'framer-motion'

const FONT = "'Fira Sans Extra Condensed', Arial, sans-serif"
const RADIUS = 54
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function RingChart({ value, color, animated }) {
  const offset = CIRCUMFERENCE * (1 - value / 100)
  return (
    <svg width="148" height="148" viewBox="0 0 148 148" style={{ display: 'block' }}>
      <circle cx="74" cy="74" r={RADIUS} fill="none" stroke="rgba(0,32,96,0.08)" strokeWidth="12" />
      <motion.circle
        cx="74" cy="74" r={RADIUS}
        fill="none"
        stroke={color}
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        initial={{ strokeDashoffset: CIRCUMFERENCE }}
        animate={{ strokeDashoffset: animated ? offset : CIRCUMFERENCE }}
        transform="rotate(-90 74 74)"
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <text
        x="74" y="74"
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fontFamily: FONT, fontSize: 30, fontWeight: 700, fill: color }}
      >
        {value}%
      </text>
    </svg>
  )
}

export default function SurveySlide({ slide, step }) {
  return (
    <div style={{
      width: '100%', maxWidth: 1100, height: '100%',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
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

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{
            fontFamily: FONT, fontSize: 28, fontWeight: 600,
            color: '#ffffff', background: '#1C4DC1',
            borderRadius: 8, padding: '4px 14px',
          }}
        >
          {slide.population}
        </motion.span>
      </div>

      {/* Label */}
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        style={{ fontFamily: FONT, fontSize: 48, fontWeight: 700, color: '#0a1628' }}
      >
        {slide.label}
      </motion.span>

      {/* Stat cards */}
      <div style={{ display: 'flex', gap: 32, flex: 1, alignItems: 'center' }}>
        {slide.stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            animate={step > i ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              flex: 1,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
              background: '#fff',
              border: `2px solid ${stat.color}22`,
              borderTop: `4px solid ${stat.color}`,
              borderRadius: 20,
              padding: '28px 20px 32px',
              boxShadow: '0 4px 24px rgba(0,32,96,0.07)',
            }}
          >
            <RingChart value={stat.value} color={stat.color} animated={step > i} />
            <span style={{
              fontFamily: FONT, fontSize: 28, fontWeight: 600,
              color: '#0a1628', lineHeight: 1.3, textAlign: 'center',
            }}>
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

    </div>
  )
}
