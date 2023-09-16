import { useEffect, useState } from 'react';

function Personas() {
  const URL = 'http://localhost:3030/personas';
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error al obtener datos:', error));
  };

  useEffect(() => {
    fetchData();
    console.log('Renderizado Completado');
  }, []);



  const handleDeleteClick = (id) => {
    // Enviar la solicitud de eliminación al servidor
    fetch(`http://localhost:3030/personas/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          // Eliminación exitosa, actualiza los datos
          fetchData();
        } else {
          console.error('Error al eliminar persona.');
          console.log(response.status)

        }
      })
      .catch((error) => console.error('Error al eliminar persona:', error));
  };

  const handleEditClick = (id) => {
    // Enviar la solicitud de eliminación al servidor
    fetch(`http://localhost:3030/personas/${id}`, {
      method: 'PUT',
    })
      .then((response) => {
        if (response.status === 204) {
          // Edit exitoso, actualiza los datos
          fetchData();
        } else {
          console.error('Error al editar persona.');
          console.log(response.status)

        }
      })
      .catch((error) => console.error('Error al eliminar persona:', error));
  };


  return (
    <div>
      <ul>
        {data.map((persona) => (
          <li key={persona.id}>
            <h3>{persona.nombreApellido}</h3>
            <h4>{persona.email}</h4>
            <h5>{persona.donacion}</h5>
            <p>{persona.mensaje}</p>
            <button onClick={() => handleDeleteClick(persona.id)}>Eliminar</button>
            <button onClick={() => handleEditClick(persona.id)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Personas
