import { useState, useEffect } from 'react'
import { window } from 'browser-monads-ts'

export const useHeroHeight = () => {
  const [heroHeight, setHeroHeight] = useState(0)

  useEffect(() => {
    const updateHeroHeight = () => {
      setHeroHeight(window.innerHeight)
    }
    updateHeroHeight()
    window.addEventListener('resize', updateHeroHeight)

    return () => window.removeEventListener('resize', updateHeroHeight)
  }, [])

  return heroHeight
}
