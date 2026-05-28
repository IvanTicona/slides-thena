import { useState, useCallback, useEffect } from 'react'

export function useNavigation(slides) {
  const [slideIndex, setSlideIndex] = useState(0)
  const [step, setStep]             = useState(0)
  const [direction, setDirection]   = useState(1)

  const currentSlide = slides[slideIndex]
  const totalSteps   = currentSlide?.steps ?? 0

  const next = useCallback(() => {
    if (step < totalSteps) {
      setStep(s => s + 1)
    } else if (slideIndex < slides.length - 1) {
      setDirection(1)
      setSlideIndex(i => Math.min(i + 1, slides.length - 1))
      setStep(0)
    }
  }, [step, totalSteps, slideIndex, slides.length])

  const prev = useCallback(() => {
    if (step > 0) {
      setStep(s => s - 1)
    } else if (slideIndex > 0) {
      setDirection(-1)
      const prevSlide = slides[slideIndex - 1]
      setSlideIndex(i => i - 1)
      setStep(prevSlide?.steps ?? 0)
    }
  }, [step, slideIndex, slides])

  const goTo = useCallback((index) => {
    setDirection(index > slideIndex ? 1 : -1)
    setSlideIndex(index)
    setStep(0)
  }, [slideIndex])

  useEffect(() => {
    const onKey = (e) => {
      if (['ArrowRight', ' ', 'ArrowDown', 'PageDown'].includes(e.key)) {
        e.preventDefault(); next()
      }
      if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault(); prev()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const progress = ((slideIndex + (step / Math.max(totalSteps, 1))) / (slides.length - 1)) * 100

  return { slideIndex, step, direction, next, prev, goTo, progress, totalSlides: slides.length }
}
