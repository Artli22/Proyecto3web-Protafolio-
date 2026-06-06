import '../Estilos/navBar.css'

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <ul className="navbar-menu">
          <li><a href="#about">sobre Mi</a></li>
          <li><a href="#passion">Hobbies</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#work">Proyectos</a></li>
          <li><a href="#footer">Contactos</a></li>
        </ul>
      </div>
    </nav>
  )
}
