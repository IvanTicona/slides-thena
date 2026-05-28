import { motion } from 'framer-motion'
import { SectionLabel } from './shared'

export default function TimelineSlide({ slide, step }) {
  return (
    <div style={{ width: '100%', maxWidth: 960 }}>
      <SectionLabel>{slide.section}</SectionLabel>

      <div style={{ display: 'flex', gap: 20, marginTop: 36, alignItems: 'stretch' }}>
        {slide.sprints.map((sprint, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={step > i ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
          >
            {/* Sprint header */}
            <div style={{
              background: `${sprint.color}22`,
              border: `1px solid ${sprint.color}55`,
              borderBottom: 'none',
              borderRadius: '12px 12px 0 0',
              padding: '16px 20px',
            }}>
              <div style={{
                fontSize: 11, fontWeight: 800, letterSpacing: 3,
                color: sprint.color, marginBottom: 4,
              }}>
                {sprint.num}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0a1628', marginBottom: 4 }}>
                {sprint.title}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(0,32,96,0.45)' }}>
                {sprint.dates}
              </div>
            </div>

            {/* Stories */}
            <div style={{
              flex: 1,
              background: 'rgba(0,32,96,0.02)',
              border: `1px solid ${sprint.color}33`,
              borderTop: `2px solid ${sprint.color}`,
              borderRadius: '0 0 12px 12px',
              padding: '16px 20px',
              display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              {sprint.stories.map((s, j) => (
                <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: sprint.color, marginTop: 5, flexShrink: 0,
                  }} />
                  <span style={{ fontSize: 12, color: 'rgba(0,32,96,0.65)', lineHeight: 1.5 }}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
