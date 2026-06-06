import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const useGsapStagger = (selector) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = ref.current.querySelectorAll(selector)
          gsap.from(elements, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
          })
          observer.unobserve(ref.current)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [selector])

  return ref
}
