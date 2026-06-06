import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const useGsapReveal = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power2.out'
          })
          observer.unobserve(element)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return ref
}
