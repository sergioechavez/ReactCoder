import React from 'react'
import ItemM from '../ItemM/ItemM'
import './ItemLista.css'

const ItemLista = ({products}) => {


  return (
    <div className='card-contenedor'>
        {products.map((item) => (
            <ItemM key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default ItemLista