import './CuadroFoco.css'
import { useState, useEffect } from 'react';

const CuadroFoco = () => {

    const [encendido, setEncendido] = useState(false)

    const cambiarEstado = () => {
        setEncendido(!encendido)
    }

    // estructura basica de un useeffect
    useEffect(() => {
        //codigo del efecto secundario

    },[dependencia])

    return (
        <div className={`cuadro ${encendido ? 'amarillo' : ''}`}>

            <button onClick={cambiarEstado}>
                {encendido ? 'Apagar' : 'Encender'}
            </button>
            
        </div>
    )
}

export default CuadroFoco;


