import { useState,useEffect } from "react";
import ItemLista from "../ItemLista/ItemLista";

const ItemListaContenedor = ({greeting}) => {

  const [products,setProducts] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      try{
        const response = await fetch('/productos.json')
        const data = await response.json()
        setProducts(data)
      }catch(error){
        console.log(error)
      }
    }

    fetchData()

  },[])

  console.log(products)

  return (
    <div className="contenedor">

      <h1>{greeting}</h1>

      <ItemLista products={products}/>

    </div>
  )
}

export default ItemListaContenedor