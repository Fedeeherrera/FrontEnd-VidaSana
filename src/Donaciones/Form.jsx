import { useState, useEffect } from 'react'

function Form ({ updatePerson, editingId }) {
  const mensajeEnviar = 'Enviar Donación'
  const mensajeActualizar = 'Actualizar Donación'
  const [formData, setFormData] = useState({
    nombreApellido: '',
    donacion: '',
    mensaje: ''
  })

  useEffect(() => {
    if (editingId !== null) {
      // Obtener los datos de la persona que se está editando
      // y llenar el formulario con esos datos
      // Supongamos que tienes un servicio que obtiene los datos de la persona a editar
      fetch(`http://localhost:3030/personas/${editingId}`)
        .then(response => response.json())
        .then(data => {
          setFormData(data)
        })
        .catch(error => {
          console.error('Error al obtener datos de la persona a editar:', error)
        })
    }
  }, [editingId])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editingId !== null) {
      // Si estamos editando, llamamos a la función de actualización
      updatePerson(formData)
    } else {
      // Si no estamos editando, agregamos una nueva persona
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
        } else {
          // Manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario
          console.error('Error al crear persona.')
        }
      } catch (error) {
        console.error('Error al crear persona:', error)
      }
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
        {editingId !== null ? mensajeActualizar : mensajeEnviar }
      </button>
    </form>
  )
}

export default Form
