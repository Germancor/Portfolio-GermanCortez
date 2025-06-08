import { useEffect, useState } from "react";
import datos from "../data/datos";
import { Card, Row, Col, ListGroup, Image } from "react-bootstrap";
import "../css/aboutme.css";
import useStore from '../store/useStore'

const MainAboutMe = () => {

  const {tema} = useStore()
  const [data, setDatos] = useState({});

  useEffect(() => {
    setDatos(datos);
  }, []); 

  if (!data) return <p>Cargando...</p>; 

  const { apellido, nombre, imagen, biografia, hobbies, habilidades, contacto } = datos;
  
  useEffect(() => {
    
  }, []);
  return (
    <div className="container md-4">
      <Row className="aboutme-row">
        <Col md={4} className="text-center mb-4 aboutme-left " >
        <br />
          <Card  className={tema === 'oscuro' ? 'card-dark' : 'card-light'}>
            <Card.Img
              variant="top"
              src={imagen}
              alt={`${nombre} ${apellido}`}
            />
            <Card.Body>
              <div className="card-apellido">{apellido}</div>
              <div className="card-nombre">{nombre}</div>
              <Card.Text className="card-bio">{biografia}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8} className="aboutme-right">
          <Row>
            <Col>
              <Card className={`mb-4 ${tema === 'oscuro' ? 'card-dark' : 'card-light'}`}>
                <Card.Header>Skills</Card.Header>
                <ListGroup variant="flush">
                  {habilidades.map((habilidad, index) => (
                    <ListGroup.Item key={index} className={tema === 'oscuro' ? 'card-dark' : 'card-light'}>
                      <img src={habilidad.icono} alt="JS" width="24px" height="24px" />
                       - {habilidad.nombre} - {habilidad.nivel} 
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className={tema === 'oscuro' ? 'card-dark' : 'card-light'}>
                <Card.Header>Hobbies</Card.Header>
                <ListGroup variant="flush">
                  {hobbies.map((hobby, index) => (
                    <ListGroup.Item key={index} className={tema === 'oscuro' ? 'card-dark' : 'card-light'}>{hobby}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row  className={`mt-4 justify-content-center ${tema === 'oscuro' ? 'card-dark' : 'card-light'}`}>
        <Col md={8}>
          <Card className={`text-center ${tema === 'oscuro' ? 'card-dark' : 'card-light'}`}>
            <Card.Body >
              <Card.Title>Contact</Card.Title>
              <Card.Text>Email: {contacto.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
    </div>
  );
};

export default MainAboutMe;
