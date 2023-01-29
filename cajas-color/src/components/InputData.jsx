import React, { useState }  from 'react';

const InputData = (props) => {
    const {colores, setColores} = props;
    const [agregar, setAgregar] = useState("");

const handleAgregar = (e) => {
    console.log("AGREANDO");
    setAgregar(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    setColores([...colores, agregar]);
    setAgregar("");
}

return(
    <form onSubmit={handleSubmit}>
        <div>
            <label>color: </label>
            <input type="text" value = {agregar} name = "agregar" onChange = {handleAgregar}/>
            <button type="submit">Add</button>
        </div>
    </form>
)
}
export default InputData
