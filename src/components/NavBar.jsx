import {Nav,Navbar,Container,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../css/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import useStore  from '../store/useStore'

const NavBar = () => {

  const {cambiarTema,tema} = useStore()
  //console.log(tema)
  return (
    <div>
      <Navbar className={`custom-navbar ${tema === 'oscuro' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}
        bg={tema === 'oscuro' ? 'dark' : 'light'}
        data-bs-theme={tema === 'oscuro' ? 'dark' : 'light'}>

        <Container fluid>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/aboutme'>AboutMe</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            <Nav.Link as={Link} to="/proyects">Projects</Nav.Link>
            <Nav.Link as={Link} to="*" disabled>Experience</Nav.Link>
          </Nav>
          <Button onClick={cambiarTema} >
            {tema === "claro" ? <FontAwesomeIcon icon={faMoon} className="social-icon" /> : <FontAwesomeIcon icon={faSun} className="social-icon" />}
          </Button>
        </Container>
      </Navbar>
      <br />
      <br />
    </div>
  )
}

export default NavBar
