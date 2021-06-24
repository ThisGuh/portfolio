import React, { useEffect } from 'react'
import gsap from 'gsap'

interface Props {
  current: null | {
    children: React.ReactChildren
  }
}

export const useIconsAnimation = (ref: Props) => {
  useEffect(() => {
    if (ref.current) {
      const icons = ref.current.children
      const timeline = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
      Object.values(icons).forEach(icon => {
        timeline.fromTo(icon, { scale: 0.7 }, { duration: 0.5, scale: 1 })
      })
    }
  })
}
