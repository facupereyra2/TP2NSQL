import React, {useState} from 'react'

const Eliminar = () =>{

    const [nroEp, setEpisodio] = useState();

    const [nombrePer, setPersonaje] = useState()

    const borrarPersonaje = async() => {
        const resultado = await fetch(`http://localhost:3030/eliminar/${nroEp}/${nombrePer}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        });
    }


    return(

        <>
            <div className="title">

                <h1>Eliminar Personaje</h1>
            </div>

            <div className="inputs">
                <input type="text" name="nroEp" placeholder='Numero de episodio' onChange={(e)=> setEpisodio(e.target.value)}/>
                <input type="text" name="nombrePer" placeholder='Nombre del personaje' onChange={(e)=> setPersonaje(e.target.value)}/>
            </div>
                <button onClick={borrarPersonaje}>Eliminar</button>
        </>


    )
}

export default Eliminar;