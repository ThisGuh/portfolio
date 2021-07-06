import { useEffect } from 'react'
import gsap from 'gsap'

interface Props {
  current: null
}

export const useCircleAnimation = (ref: Props) => {
  const circle = ref.current

  useEffect(() => {
    if (circle) {
      gsap.set(circle, { autoAlpha: 0 })
      const timeline = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
      timeline.fromTo(
        circle,
        { x: '+=600' },
        { duration: 1, x: '-=600', autoAlpha: 1 }
      )
    }
  })
}
