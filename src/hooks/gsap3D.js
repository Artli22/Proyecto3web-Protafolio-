import { useEffect } from 'react'
import gsap from 'gsap'

export function useGsap3D(ref) {
  useEffect(() => {
    const image = ref.current
    if (!image) return

    const handleMouseMove = (e) => {
      const rect = image.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      gsap.to(image, {
        rotateY: x * 25,
        rotateX: -y * 25,
        duration: 0.3,
        transformPerspective: 600,
      })
    }

    const handleMouseLeave = () => {
      gsap.to(image, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.5,
        transformPerspective: 600,
      })
    }

    image.addEventListener('mousemove', handleMouseMove)
    image.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      image.removeEventListener('mousemove', handleMouseMove)
      image.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref])
}
