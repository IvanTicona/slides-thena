import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigation } from '../../hooks/useNavigation'
import { useFullscreen } from '../../hooks/useFullscreen'
import { slides } from '../../data/slides'
import Slide from './Slide'
import SlideHeader from './SlideHeader'
import SlideFooter from './SlideFooter'

import TitleSlide       from '../slides/TitleSlide'
import AgendaSlide      from '../slides/AgendaSlide'
import SectionIntroSlide from '../slides/SectionIntroSlide'
import CardGridSlide    from '../slides/CardGridSlide'
import FullImageSlide   from '../slides/FullImageSlide'
import StatementSlide   from '../slides/StatementSlide'
import StatsSlide       from '../slides/StatsSlide'
import ObjectiveSlide   from '../slides/ObjectiveSlide'
import BulletsSlide     from '../slides/BulletsSlide'
import TwoColumnSlide   from '../slides/TwoColumnSlide'
import TimelineSlide    from '../slides/TimelineSlide'
import PersonalSlide   from '../slides/PersonalSlide'
import FigureSlide     from '../slides/FigureSlide'
import TextFigureSlide from '../slides/TextFigureSlide'
import ImageGridSlide   from '../slides/ImageGridSlide'
import ImageDetailSlide from '../slides/ImageDetailSlide'
import IshikawaSlide    from '../slides/IshikawaSlide'
import FlowSlide        from '../slides/FlowSlide'
import ZigzagFlowSlide  from '../slides/ZigzagFlowSlide'
import SurveySlide      from '../slides/SurveySlide'

const REGISTRY = {
  title:        TitleSlide,
  agenda:       AgendaSlide,
  'section-intro': SectionIntroSlide,
  'card-grid':  CardGridSlide,
  'full-image': FullImageSlide,
  statement:    StatementSlide,
  stats:        StatsSlide,
  objective:    ObjectiveSlide,
  bullets:      BulletsSlide,
  'two-column': TwoColumnSlide,
  timeline:     TimelineSlide,
  personal:     PersonalSlide,
  figure:       FigureSlide,
  'text-figure': TextFigureSlide,
  'image-grid':   ImageGridSlide,
  'image-detail': ImageDetailSlide,
  'ishikawa':     IshikawaSlide,
  'flow':         FlowSlide,
  'zigzag-flow':  ZigzagFlowSlide,
  'survey':       SurveySlide,
}

export default function PresentationShell() {
  const nav = useNavigation(slides)
  const { toggle: toggleFS } = useFullscreen()
  const current = slides[nav.slideIndex]
  const slideAreaRef = React.useRef(null)
  const [exporting, setExporting] = React.useState(false)
  const [exportProgress, setExportProgress] = React.useState(0)

  if (!current) return null
  const SlideContent = REGISTRY[current.type]

  async function exportPDF() {
    if (exporting) return
    setExporting(true)
    setExportProgress(0)

    const { jsPDF } = await import('jspdf')
    const html2canvas = (await import('html2canvas')).default

    const el = slideAreaRef.current
    const { width, height } = el.getBoundingClientRect()
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [width, height] })

    for (let i = 0; i < slides.length; i++) {
      nav.goTo(i, slides[i].steps ?? 0)
      await new Promise(r => setTimeout(r, 700))

      const canvas = await html2canvas(el, { scale: 2, useCORS: true, allowTaint: true, logging: false })
      if (i > 0) pdf.addPage()
      pdf.addImage(canvas.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, width, height)
      setExportProgress(Math.round((i + 1) / slides.length * 100))
    }

    pdf.save('thena-slides.pdf')
    nav.goTo(0, 0)
    setExporting(false)
    setExportProgress(0)
  }

  return (
    <div
      style={{ position: 'fixed', inset: 0, cursor: exporting ? 'wait' : 'pointer' }}
      onClick={exporting ? undefined : nav.next}
    >
      {/* Slide area — 16:9 centered */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#e8edf5',
      }}>
        <div
          ref={slideAreaRef}
          style={{
            position: 'relative',
            width: '100%', height: '100%',
            maxWidth: 'min(100vw, calc(100vh * 16/9))',
            maxHeight: 'min(100vh, calc(100vw * 9/16))',
            overflow: 'hidden',
          }}
        >
          <AnimatePresence mode="wait">
            <Slide key={current.id} slide={current}>
              {SlideContent && <SlideContent slide={current} step={nav.step} />}
            </Slide>
          </AnimatePresence>

          {/* Header & footer outside AnimatePresence — no animan con el slide */}
          <SlideHeader slideIndex={nav.slideIndex} />
          <SlideFooter />
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, height: 3,
        background: 'rgba(0,32,96,0.1)',
      }}>
        <motion.div
          animate={{ width: `${nav.progress}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ height: '100%', background: 'linear-gradient(90deg, #6D9EEB, #D90368)' }}
        />
      </div>

      {/* Controls */}
      <div
        style={{
          position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: 8, zIndex: 100,
        }}
        onClick={e => e.stopPropagation()}
      >
        <NavBtn onClick={nav.prev} label="‹" />
        <NavBtn onClick={nav.next} label="›" />
        <NavBtn onClick={toggleFS} label="⛶" />
        <NavBtn onClick={exportPDF} label="PDF" disabled={exporting} />
      </div>

      {/* Keyboard hint — fades after 3s */}
      <KeyboardHint />

      {/* Export progress overlay */}
      {exporting && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(0,12,40,0.75)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 20,
        }}>
          <span style={{ color: '#fff', fontSize: 18, fontFamily: 'system-ui', letterSpacing: 1 }}>
            Exportando PDF... {exportProgress}%
          </span>
          <div style={{ width: 320, height: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 4 }}>
            <div style={{
              height: '100%', borderRadius: 4,
              background: 'linear-gradient(90deg, #6D9EEB, #D90368)',
              width: `${exportProgress}%`, transition: 'width 0.3s',
            }} />
          </div>
        </div>
      )}
    </div>
  )
}

function NavBtn({ onClick, label, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: label === 'PDF' ? 48 : 36, height: 36,
        background: disabled ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.85)',
        border: '1px solid rgba(0,32,96,0.15)',
        borderRadius: 8, color: '#002060',
        fontSize: label === 'PDF' ? 12 : 18,
        fontWeight: label === 'PDF' ? 700 : 400,
        fontFamily: label === 'PDF' ? 'system-ui' : 'inherit',
        cursor: disabled ? 'wait' : 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(10px)',
        transition: 'background 0.2s',
        letterSpacing: label === 'PDF' ? 1 : 0,
      }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = 'rgba(109,158,235,0.25)' }}
      onMouseLeave={e => { if (!disabled) e.currentTarget.style.background = 'rgba(255,255,255,0.85)' }}
    >
      {label}
    </button>
  )
}

function KeyboardHint() {
  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3, duration: 1.5 }}
      style={{
        position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)',
        fontSize: 11, color: 'rgba(0,32,96,0.45)',
        letterSpacing: 2, pointerEvents: 'none',
      }}
    >
      ← → SPACE · F fullscreen · click to advance
    </motion.div>
  )
}
