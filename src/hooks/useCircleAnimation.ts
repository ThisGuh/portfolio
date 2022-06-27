import { useEffect } from 'react'
import gsap from 'gsap'

interface Props {
  current: null
}

export const useCircleAnimation = (ref: Props) => {
  const circle = ref.current

  useEffect(() => {
    if (circle) {
      window.scrollTo(0, 0)
      const timeline = gsap.timeline({ defaults: { ease: 'power1' } })
      timeline.fromTo(
        circle,
        { scale: 25, zIndex: 2 },
        { duration: 1.5, scale: 1, zIndex: 0 }
      )
    }
  }, [circle])
}
