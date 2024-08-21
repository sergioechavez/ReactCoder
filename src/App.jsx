import './App.css'
import Navbar from './components/Navbar/Navbar'
import CartWidget from './components/CartWidget/CartWidget'
import Footer from './components/Footer/Footer'
import Card from './components/Example/Card'
import CuadroFoco from './components/Example/CuadroFoco'
import ContadorSec from './components/Example/ContadorSec'
import ContadorRef from './components/Example/ContadorRef'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListaContenedor from './components/ItemListaContenedor/ItemListaContenedor'


function App() {


  return (
    <>

      <Navbar />

      <ItemListaContenedor greeting="Bienvenidos a la Tienda"/>

      

      <Footer />
      
      {/* <CuadroFoco/> */}
      
      {/* <ContadorSec /> */}

      {/* <ContadorRef/> */}

      <ItemCount/>
    </>
  )
}

export default App
