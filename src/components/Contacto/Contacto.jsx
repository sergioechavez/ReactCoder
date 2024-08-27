import React from 'react'

const Contacto = () => {
  return (
    <div>

          <h1>Contacto</h1>

          <form>
            <label htmlFor="nombre"></label>
            <input type="text" id="nombre"></input>

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email"></input>

              <label htmlFor="mensaje">Mensaje:</label>
              <textarea name="mensaje" id="mensaje"></textarea>

              <button type="submit">Enviar</button>
          </form>
    </div>
  )
}

export default Contacto