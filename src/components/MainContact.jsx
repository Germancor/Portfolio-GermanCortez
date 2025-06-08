import { useState , useEffect } from "react";
import useStore from '../store/useStore'
import '../css/contact.css'

const MainContact = () => {

    const {tema} = useStore()

    const initialState = {
      nombre : '',
      correo : '',
      asunto : '',
      mensaje : ''
    };
    const [mensaje, setMensaje] = useState(initialState);
    const [info,setinfo] = useState([])

    const handleChange = (e) => {
      setMensaje({...mensaje,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      setinfo([...info,mensaje])
      console.log(info)
      e.target.reset()
      setMensaje(initialState)
    }
    useEffect(() => {
    console.log("Mensajes actualizados:", info);
  }, [info]);
  return (
    <div>
      <h3 className={tema === 'oscuro' ? 'card-dark' : 'card-light'}>Comunicarse mediante correo</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name :</label>
        <input type="text" required placeholder="Juan Gimenez" onChange={handleChange} name='nombre'/>
        <br />
        <label htmlFor="">Subject: </label>
        <input type="text" required placeholder="Busqueda" onChange={handleChange} name='asunto'/>
        <br />
        <label htmlFor="">Email:</label>
        <input type="text" required placeholder="user@gmail.com" onChange={handleChange} name='correo'/>
        <br />
        <label htmlFor="">Menssage</label>
        <input type="text" required placeholder="mensaje..." onChange={handleChange} name='mensaje'/>
        <br />
        <br />
        <button type="submit" className="button-contact">Submit</button>
      </form>
      <br />
    </div>
  )
}

export default MainContact

