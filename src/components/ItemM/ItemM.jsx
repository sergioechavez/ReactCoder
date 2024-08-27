import React from 'react'
import './ItemM.css'
import { Link } from 'react-router-dom'

const ItemM = ({item}) => {
  return (

        <Link to={`/item/${item.id}`}>
        <div key={item.id} className="card">

          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} className='hola' />
              

          </div>
    </Link>
  )
}

export default ItemM