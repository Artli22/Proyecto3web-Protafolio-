import '../Estilos/proyectos.css'
import { useGsapReveal } from '../hooks/gsapReveal'
import { ExternalLink } from 'lucide-react'

export default function Proyectos() {
  const containerRef = useGsapReveal()

  const proyectos = [
    {
      titulo: 'Calculadora BMO',
      videoId: 'cqVjyFYr5zs',
      descripcion: 'Aunque hacer una calculadora ya es un refrito en el mundo de la programación, no significa que uno no pueda darle su toque personal. Mi meta con este trabajo era resaltar en la parte de diseño antes que la lógica, ya que la clase iba a utilizar la mismas herramientas para la lógica, JS + TS + React, por ello quise basar mi calculadora en el personaje BMO de Hora de Aventura, junto con sus expresiones carismáticas. En este proyecto tambien pude practicar el uso de storybooks y test, dos tecnicas que estoy dispuesto a utilizar en futuros proyectos.',
      repositorio: 'https://github.com/Artli22/Proyecto2web.git'
    },
    {
      titulo: 'Series Tracker',
      videoId: 'qfxjaYrl9Ik',
      descripcion: 'Aqui el desafio era destacar con un diseño minimalista y practicar un poco el concepto de componentes en React, al realizar un estilo de card global para todas las series y asegurar la escabilidad completa del proyecto. En este proyecto también tuve la oportunidad de practicar mis habilidades con MySQL para la base de datos y GO para el backend del proyecto.',
      repositorio: 'https://github.com/Artli22/Proyecto-FullStack-Web-Backend.git'
    },
    {
      titulo: 'E-commerce Inversiones Elohim',
      videoId: '_E-paM-gpTs',
      descripcion: 'Este video es una demonstracion de 1 de los 4 sprints en el desarollo de una tienda en linea o e-commerce. Este proyecto esta influenciado por el estilo de trabajo de mi equipo, los requisitos funcionales y esteticos del cliente y las habilidades que contabamos al momento de crear el proyecto. En este proyecto pude practicar mis habilidades con Docker, TS + tailwind para el frontend, c++ para el backend y habilidades blandas como la comunicacion y trabajo en equipo.',
      repositorio: 'https://github.com/angc-labs/CC3090-inversiones-elohim-solution-frontend.git'
    }
  ]

  return (
    <section className="proyectos">
      <div className="proyectos-container" ref={containerRef}>
        <h1 className="proyectos-title">Mis Proyectos</h1>
        
        <p className="proyectos-intro">
          Mis proyectos que considero que reflejan mi experiencia en el ambito de frontend:
        </p>

        <div className="proyectos-list">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="proyecto-card">
              <h2 className="proyecto-titulo">{proyecto.titulo}</h2>
              
              <div className="proyecto-video">
                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/${proyecto.videoId}?autoplay=1&mute=1&loop=1&playlist=${proyecto.videoId}&controls=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={proyecto.titulo}
                />
              </div>
              
              <p className="proyecto-descripcion">{proyecto.descripcion}</p>
              
              <a 
                href={proyecto.repositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="proyecto-boton"
              >
                <span>Ver el repositorio</span>
                <ExternalLink size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
