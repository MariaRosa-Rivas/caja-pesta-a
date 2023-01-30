import { useState } from 'react';
import styles from './ListaEntradas.module.css'

const data = [
    {nombre: "Tab 1", respuesta: "Tab 1 content is showing here."},
    {nombre: "Tab 2", respuesta: "Tab 2 content is showing here."},
    {nombre: "Tab 3", respuesta: "Tab 3 content is showing here."},
]
const ListaEntradas = ( {setLeader}) => {

    const [encuesta, setEncuesta] = useState(data);


    const handleInputChange=(e, idx) => {
        let aux = [...encuesta];
        aux[idx].respuesta = e.target.value;
        console.log(aux);
        setEncuesta([...aux]);
    }

  return (
    <div className={styles.componente}>
        {
            encuesta.map((item, index, arr)=>{
                return(
                    <div key={item.nombre + index} className= {styles.Pregunta} onClick={(e)=> setLeader(item.respuesta)} onChange = {(e) => handleInputChange (e, index)}>
                        <h4> {item.nombre}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ListaEntradas