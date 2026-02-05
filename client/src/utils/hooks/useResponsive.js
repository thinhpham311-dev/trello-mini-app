import { useEffect, useState } from 'react'

const breakpoint = {
  '2xl': 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
}

const getResponsiveState = () => {
  if (typeof window === 'undefined') {
    return {
      windowWidth: 0,
      larger: {},
      smaller: {},
    }
  }

  const width = window.innerWidth

  const larger = {}
  const smaller = {}

  Object.entries(breakpoint).forEach(([key, value]) => {
    larger[key] = width > value
    smaller[key] = width < value
  })

  return {
    windowWidth: width,
    larger,
    smaller,
  }
}

const useResponsive = () => {
  const [responsive, setResponsive] = useState(() => getResponsiveState())

  useEffect(() => {
    const handleResize = () => {
      setResponsive(getResponsiveState())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return responsive
}

export default useResponsive
