import '../Estilos/footer.css'
import { Mail } from 'lucide-react'
import { FiGithub, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h2 className="footer-title">¡Contáctame!</h2>
          
          <p className="footer-text">
            Si te gustaron las demos y tienes una buena idea puedes contactarme mediante los siguientes medios
          </p>

          <div className="footer-contact">
            <div className="contact-item">
              <Mail size={20} />
              <span>Teléfono: 5555-3242</span>
            </div>
          </div>

          <div className="footer-socials">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-link"
            >
              <FiInstagram size={28} />
            </a>
            <a 
              href="https://github.com/Artli22" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <FiGithub size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
