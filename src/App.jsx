import './App.css'
import Navbar from './components/Navbar/Navbar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemlistContainer from './components/ItemListContainer/ItemlistContainer'

function App() {


  return (
    <>

    <Navbar />

    <ItemlistContainer greeting="Bienvenidos a la Tienda"/>

      <h1>Tienda de Bebidas</h1>
    </>
  )
}

export default App
