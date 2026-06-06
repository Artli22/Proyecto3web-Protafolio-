import '../Estilos/hero.css'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ChevronDown } from 'lucide-react'
import heroImage from '../Archivos/Img/img2Proyecto3.jpeg'

export default function Hero() {
  const heroRef = useRef(null)
  const spotlightRef = useRef(null)
  const contentRef = useRef(null)

  useGSAP(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out'
    })

    const handleMouseMove = (e) => {
      gsap.to(spotlightRef.current, {
        left: e.offsetX,
        top: e.offsetY,
        duration: 0.2,
        overwrite: 'auto'
      })
    }

    heroRef.current?.addEventListener('mousemove', handleMouseMove)

    return () => {
      heroRef.current?.removeEventListener('mousemove', handleMouseMove)
    }
  }, { scope: heroRef })

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="hero" ref={heroRef}>
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      ></div>

      <div className="spotlight" ref={spotlightRef}></div>

      <div className="hero-content" ref={contentRef}>
        <h1 className="hero-title">Hola, soy Arturo</h1>
        <p className="hero-subtitle">Frontend Developer Jr.</p>
      </div>

      <button className="scroll-arrow" onClick={scrollDown} aria-label="Scroll down">
        <ChevronDown size={24} />
      </button>
    </section>
  )
}
