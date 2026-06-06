import '../Estilos/pasatiempos.css'
import { useGsapReveal } from '../hooks/gsapReveal'
import img4 from '../Archivos/Img/Gran-Turismo-Symbol.png'
import img5 from '../Archivos/Img/img5Proyectoweb3.png'
import img6 from '../Archivos/Img/img6Proyectoweb3.png'

export default function Pasatiempos() {
  const containerRef = useGsapReveal()

  return (
    <section className="pasatiempos">
      <div className="pasatiempos-container" ref={containerRef}>
        <h1 className="pasatiempos-title">
          Mis hobbies
        </h1>
        
        <p className="pasatiempos-intro">
          Mis principales pasatiempos que me entretienen cuando no hay trabajo por hacer:
        </p>

        <div className="hobbies-grid">
          <div className="hobby-card">
            <div className="hobby-image-wrapper">
              <img src={img4} alt="Gran Turismo" className="hobby-image" />
            </div>
            <h2 className="hobby-title">Jugar Gran Turismo</h2>
            <p className="hobby-text">
              Me encanta el concepto, mecánicas y automóviles que ofrece esta saga de videojuegos, 
              las distintas innovaciones que trajo al mundo de Sim Racing y su compleja programación 
              respecto a la IA de los corredores CPU, de hecho fue una de las razones por la que 
              despertaron mi curiosidad en la programación.
            </p>
          </div>

          <div className="hobby-card">
            <div className="hobby-image-wrapper">
              <img src={img6} alt="Ciclismo" className="hobby-image" />
            </div>
            <h2 className="hobby-title">Ciclismo</h2>
            <p className="hobby-text">
              Considero el ciclismo como un excelente deporte, ya que experimentas ese sentimiento 
              de libertad y diversión que uno tanto anhela. Este deporte trae muchos beneficios; 
              reducir el estrés, aumentar la capacidad pulmonal, ejercitar las piernas y mejorar 
              el flujo sanguíneo a través del cuerpo.
            </p>
          </div>

          <div className="hobby-card">
            <div className="hobby-image-wrapper">
              <img src={img5} alt="Super Mario Bros Speedrun" className="hobby-image" />
            </div>
            <h2 className="hobby-title">Speedrun de Super Mario Bros</h2>
            <p className="hobby-text">
              Desde pequeño fui fan de la saga Super Mario Bros; me encantaba su simpleza artística 
              en sus sprites, la música carismática de los juegos de los 80 y las animaciones limitadas 
              de los sprites. Mi fanatismo creció al descubrir la comunidad de speedrun; ya que 
              llevaban el juego al límite, al explotar errores de programación de un juego creado +35 años.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
