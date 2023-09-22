function Form() {
  return (
    <form className="form">
      <div className="div_nombre_donacion">
        <label htmlFor="Name">Nombre y Apellido</label>
        <input className="input_name" type="text" id="Name" name="Name" />
        <label htmlFor="Donacion">Donacion</label>
        <input className="input_donacion" type="text" id="Donacion" name="Donacion" />
      </div>
      <div className="div_mensaje">
        <label htmlFor="Mensaje">Mensaje</label>
        <input className="input_mensaje" type="text" id="Mensaje" name="Mensaje" />
      </div>
      <br />
      <button className="submit">Enviar Donacion</button>
    </form>
  )
}

export default Form
