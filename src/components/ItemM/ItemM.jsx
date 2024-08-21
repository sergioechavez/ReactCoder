import React from 'react'
import './ItemM.css'

const ItemM = ({item}) => {
  return (
        <div key={item.id} className="card">
              <img src={item.imagen} alt={item.nombre} />
              <h2>{item.nombre}</h2>
              <p>{item.descripcion}</p>
              <p>{item.stock}</p>
              <p>{item.precio}</p>
          </div>
  )
}

export default ItemM