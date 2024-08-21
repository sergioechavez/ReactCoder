import {useState,useEffect} from 'react'

const ContadorSec = () => {

    //DEFINIMOS EL ESTADO DEL CONTADOR UTILIZANDO useState
const [contador,setContador] = useState(40)

//DEFINIMOS UN EFECTO CON useEffect
useEffect(

    //CODIGO QUE SE EJECUTA
    () => {

        const intervalId = setInterval(() => {
            setContador(contador => contador +1)
        },2000);

        //ESTA FUNCION S EJECUTARA CUANDO EL COMPONETE SE DESMONTE
        //LIMPIMOS EL INTERVALO PARA EVITAR FUGAS DE MEMORIA
        return () => {
            clearInterval(intervalId)
        }


    },
    //DEPENDENCIA Q SE VA A MARCAR SI CODIGO S EJECUTA NUEVAMENTE
    []
)



  return (
    <div>
      
        <h1>Contador: {contador}</h1>

    </div>
  )
}

export default ContadorSec
