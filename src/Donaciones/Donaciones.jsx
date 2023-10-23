import { useEffect, useState } from 'react'
import Imagenn from './Imagenn'
import Form from './Form'
import './Donaciones.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

function Donaciones () {
  const URL = 'http://localhost:3030/personas'
  const [data, setData] = useState([])
  const [editingId, setEditingId] = useState(null)

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
      method: 'DELETE'
    })
      .then((response) => {
        if (response.status === 200) {
          // Eliminación exitosa, actualiza los datos
          fetchData()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Persona eliminada correctamente',
            showConfirmButton: false,
            timer: 1200
          })
        } else {
          console.error('Error al eliminar persona.')
          Swal.fire({
            position: 'top-end',
            icon: 'Error',
            title: 'Error al eliminar Persona',
            showConfirmButton: false,
            timer: 1200
          })
          console.log(response.status)
        }
      })
      .catch((error) => console.error('Error al eliminar persona:', error))
  }

  const handleEditClick = (id) => {
    // Buscar la persona a editar en los datos actuales
    const personaToEdit = data.find((persona) => persona.id === id)

    if (personaToEdit) {
      // Establecer los datos de la persona a editar en el formulario
      setEditingId(id)
      // Esto permitirá que el formulario se rellene con los datos de la persona a editar
    } else {
      console.error('Persona no encontrada para editar.')
    }
  }

  // Función para actualizar la persona
  const handleUpdatePerson = async (updatedPerson) => {
    try {
      const response = await fetch(`http://localhost:3030/personas/${editingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPerson)
      })

      if (response.status === 204) {
        // Actualización exitosa, limpiar el estado de edición y actualizar los datos
        setEditingId(null)
        fetchData()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Persona actualizada correctamente',
          showConfirmButton: false,
          timer: 1200
        })
      } else {
        console.error('Error al editar persona.')
      }
    } catch (error) {
      console.error('Error al editar persona:', error)
    }
  }

  return (
    <div className="container">
      <h1 className='h1__donaciones'>Donaciones</h1>
      <Form className="form" updatePerson={handleUpdatePerson} editingId={editingId} />
      <ul className="ul">
        {data.map((persona) => (
          <li className="card" key={persona.id}>
            <Imagenn />
            <h2 className="h2">{persona.nombreApellido}</h2>
            <h3 className="h3">${persona.donacion}</h3>
            <h4 className="h4">{persona.mensaje}</h4>
            <div>
              <button
                className="button editar"
                onClick={() => handleEditClick(persona.id)}
              >
                Editar
              </button>
              <button
                className="button eliminar"
                onClick={() => handleDeleteClick(persona.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Donaciones
