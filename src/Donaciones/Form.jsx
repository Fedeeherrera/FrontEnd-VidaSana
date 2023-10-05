import { useState } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

function Form () {
  const [formData, setFormData] = useState({
    nombreApellido: '',
    donacion: '',
    mensaje: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3030/personas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.status === 201) {
        // Persona creada correctamente, puedes mostrar una notificación o hacer algo más
        console.log('Persona creada correctamente')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Persona creada correctamente',
          showConfirmButton: false,
          timer: 1200
        })
      } else {
        // Manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario
        console.error('Error al crear persona.')
      }
    } catch (error) {
      console.error('Error al crear persona:', error)
      Swal.fire({
        position: 'top-end',
        icon: 'Error',
        title: 'Error al crear Persona',
        showConfirmButton: false,
        timer: 1200
      })
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="div_nombre">
        <label htmlFor="nombreApellido">Nombre y Apellido</label> <br />
        <input
          className="input_name"
          type="text"
          id="nombreApellido"
          name="nombreApellido"
          value={formData.nombreApellido}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="div_donacion">
        <label htmlFor="donacion">Donacion</label> <br />
        <input
          className="input_donacion"
          type="text"
          id="donacion"
          name="donacion"
          value={formData.donacion}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="div_mensaje">
        <label htmlFor="mensaje">Mensaje</label> <br />
        <input
          className="input_mensaje"
          type="text"
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleInputChange}
          required
        />
      </div>
      <br />
      <button className="submit" type="submit">
        Enviar Donacion
      </button>
    </form>
  )
}

export default Form
