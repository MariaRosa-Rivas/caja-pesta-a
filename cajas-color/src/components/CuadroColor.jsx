import React, { useState } from 'react'
import InputData from './InputData'
import ListaColor from './ListaColor'

const CuadroColor = () => {
    const [colores, setColores] = useState([]);
  return (
    <div>
        <InputData colores={colores} setColores = {setColores}/>
        <ListaColor colores={colores} />
        <hr />
    </div>
  )
}

export default CuadroColor

