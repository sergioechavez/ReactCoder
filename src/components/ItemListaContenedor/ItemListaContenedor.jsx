import { useState,useEffect } from "react";
import "./ItemListaContenedor.css"
import ItemLista from "../ItemLista/ItemLista";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";


const ItemListaContenedor = ({greeting}) => {

  const [products,setProducts] = useState([])

  const [loading,setLoading] = useState(true)

  const {categoryId} = useParams();

  useEffect(() => {

    const fetchData = async () => {
      try{
        const response = await fetch('/productos.json')
        const data = await response.json()

        const filteredProducts = categoryId ? data.filter((p) => p.category === categoryId) : data;
        setProducts(filteredProducts)

      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
    }

    fetchData()

  },[categoryId])


  return (
    <div className="contenedor">

      <h1>{greeting}</h1>

      {loading ? <Spinner /> : <ItemLista products={products} />}

    </div>
  )
}

export default ItemListaContenedor