import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <br />
      <h4>Pagina no encontrada</h4>
      <Button className='bg-danger' as={Link} to='/'>Ir a Inicio</Button>
      <br />
      <img src="https://http.cat/404" alt="IMG404" />
      <br />
    </div>
  );
};

export default Error;
