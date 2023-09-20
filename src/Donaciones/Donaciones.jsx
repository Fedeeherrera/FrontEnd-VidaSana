import { useEffect, useState } from 'react'
import Imagenn from './Imagenn'
import './Donaciones.css'

function Donaciones() {
  const URL = 'http://localhost:3030/personas'
  const [data, setData] = useState([])

  const fetchData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error al obtener datos:', error))
  }

  useEffect(() => {
    fetchData()
    console.log('Renderizado Completado')
  }, [])

  const handleDeleteClick = (id) => {
    // Enviar la solicitud de eliminación al servidor
    fetch(`http://localhost:3030/personas/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          // Eliminación exitosa, actualiza los datos
          fetchData()
        } else {
          console.error('Error al eliminar persona.')
          console.log(response.status)
        }
      })
      .catch((error) => console.error('Error al eliminar persona:', error))
  }

  const handleEditClick = (id) => {
    // Enviar la solicitud de eliminación al servidor
    fetch(`http://localhost:3030/personas/${id}`, {
      method: 'PUT',
    })
      .then((response) => {
        if (response.status === 204) {
          // Edit exitoso, actualiza los datos
          fetchData()
        } else {
          console.error('Error al editar persona.')
          console.log(response.status)
        }
      })
      .catch((error) => console.error('Error al eliminar persona:', error))
  }

  return (
    <div className='container'>
      <ul className="ul">
        {data.map((persona) => (
          <li className="li " key={persona.id}>
            <Imagenn />
            <h2 className="h2">{persona.nombreApellido}</h2>
            <h3 className="h3">${persona.donacion}</h3>
            <h4 className="h4">{persona.mensaje}</h4>
            <div>
              <button
                className="button eliminar"
                onClick={() => handleDeleteClick(persona.id)}
              >
                Eliminar
              </button>
              <button className="button editar" onClick={() => handleEditClick(persona.id)}>
                Editar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Donaciones
