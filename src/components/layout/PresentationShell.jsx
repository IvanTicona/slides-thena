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
  if (!current) return null
  const SlideContent = REGISTRY[current.type]

  return (
    <div
      style={{ position: 'fixed', inset: 0, cursor: 'pointer' }}
      onClick={nav.next}
    >
      {/* Slide area — 16:9 centered */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#e8edf5',
      }}>
        <div style={{
          position: 'relative',
          width: '100%', height: '100%',
          maxWidth: 'min(100vw, calc(100vh * 16/9))',
          maxHeight: 'min(100vh, calc(100vw * 9/16))',
          overflow: 'hidden',
        }}>
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
      </div>

      {/* Keyboard hint — fades after 3s */}
      <KeyboardHint />
    </div>
  )
}

function NavBtn({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 36, height: 36,
        background: 'rgba(255,255,255,0.85)',
        border: '1px solid rgba(0,32,96,0.15)',
        borderRadius: 8, color: '#002060',
        fontSize: 18, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(10px)',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => e.target.style.background = 'rgba(109,158,235,0.25)'}
      onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.85)'}
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
