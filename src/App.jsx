import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ItemListaContenedor from './components/ItemListaContenedor/ItemListaContenedor'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Error from './components/Error/Error'
import Contacto from './components/Contacto/Contacto'

const App = () => {


  return (
    <>
      <BrowserRouter>

      <Navbar />

      <Routes>

          <Route path='/' element={<ItemListaContenedor greeting="Bienvenidos a la Tienda" />}/>

        <Route path='/category/:categoryId' element={<ItemListaContenedor />} />

        <Route path='/item/:id' element={<ItemDetailContainer />} />

        <Route path='/contacto' element={<Contacto/>}/>

        <Route path='/*' element={<Error />} />

      </Routes>

        <Footer />
      
      </BrowserRouter>



      

    </>
  )
}

export default App
