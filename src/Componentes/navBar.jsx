import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import '../Estilos/navBar.css'

gsap.registerPlugin(ScrollToPlugin)

export default function NavBar() {
  const handleScroll = (e, targetId) => {
    e.preventDefault()
    gsap.to(window, {
      scrollTo: { y: `#${targetId}`, offsetY: 80 },
      duration: 1,
      ease: 'power2.inOut',
    })
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <ul className="navbar-menu">
          <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>sobre Mi</a></li>
          <li><a href="#passion" onClick={(e) => handleScroll(e, 'passion')}>Hobbies</a></li>
          <li><a href="#work" onClick={(e) => handleScroll(e, 'work')}>Proyectos</a></li>
          <li><a href="#footer" onClick={(e) => handleScroll(e, 'footer')}>Contactos</a></li>
        </ul>
      </div>
    </nav>
  )
}
