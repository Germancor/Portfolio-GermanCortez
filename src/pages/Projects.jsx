
import { Container, Row, Col } from 'react-bootstrap';
import projectData from '../data/proyectsData';
import MainProject from '../components/MainProyects';

const Projects = () => {
  return (
    <Container className="projects-container my-5">
      <h2 className="mb-4 text-center">My Proyects</h2>
      <Row className="g-4">
        {projectData.map((project, index) => (
          <Col key={index} xs={12} md={4}>
            <MainProject {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
