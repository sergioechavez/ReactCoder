import {useState,useRef} from 'react'

const ContadorRef = () => {

    const [count,setCount] = useState(0);

    const refCount = useRef(0);

    const handletIncrement = () => {
        setCount(count + 1);

    }

    const handleSaveRef = () => {
        refCount.current = count;
        console.log(`Valor actual de refCount: ${refCount.current}`);

    }

    const handleShowRef = () => {
        console.log(`Valor actual de refCount: ${refCount.current}`);
    }


  return (
    <div>
      
        <h1>Contador: {count}</h1>

        <button onClick={handletIncrement}>Incrementar</button>

        <button onClick={handleSaveRef}>Guardar en const ref = useRef(initialValue)</button>

        <button onClick={handleShowRef}>Mostrar referencia</button>
    </div>
  )
}

export default ContadorRef
