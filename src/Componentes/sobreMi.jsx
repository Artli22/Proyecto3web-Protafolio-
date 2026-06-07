import '../Estilos/sobreMi.css'
import { useRef } from 'react'
import { useGsapReveal } from '../hooks/gsapReveal'
import { useGsap3D } from '../hooks/gsap3D'
import img3 from '../Archivos/Img/img3Proyectoweb3.jpeg'

export default function SobreMi() {
  const ref = useGsapReveal()
  const imageRef = useRef(null)
  useGsap3D(imageRef)

  return (
    <section className="sobre-mi" id="about" ref={ref}>
      <div className="sobre-mi-container">
        <h1 className="sobre-mi-title">Un poco sobre mi</h1>
        
        <div className="sobre-mi-content">
          <div className="sobre-mi-image-wrapper">
            <img ref={imageRef} src={img3} alt="Arturo Lima" className="sobre-mi-image" />
          </div>
          
          <p className="sobre-mi-text">
            Hola, soy Arturo Lima y soy un aspirante desarrollador web en el area de Frontend. 
            Actualmente me encuentro cursando mi tercer año en la carrera de Ingeniería en Ciencia 
            de la Computación, en la Universidad del Valle de Guatemala. Mis metas futuras es 
            encontrar un trabajo fijo donde pueda seguir practicando mis habilidades en el desarrollo 
            frontend para paginas web, aplicaciones de escritorio y aplicaciones móviles.
          </p>
        </div>
      </div>
    </section>
  )
}
