import React from 'react'
 
const ListaColor = ({ colores }) => {
    return(
        <div className='cuadro'>{colores.map((colores, index)=><h1 className={colores} key = {index}>{colores}</h1> )}</div>
    )
}
export default ListaColor