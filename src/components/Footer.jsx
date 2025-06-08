import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';  
import '../css/footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <a href="https://github.com/germancor" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/GermánCortez" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
      </div>
    </div>
  )
}

export default Footer
