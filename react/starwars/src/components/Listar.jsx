import React, {useState} from 'react'



const Listar = () =>{

    const [episodio, setEpisodio] = useState({
        episodio : ''
    });

    const[personaje, setPersonajes] = useState()
    
    const handleChange = (e) =>{
        setEpisodio({ ...episodio, [e.target.name]: e.target.value });
    }

    const listarPersonajes = async() =>{
        const resultado = await fetch(`http://localhost:3030/listar/${episodio}`)
        const data = await resultado.json();
        console.log(data);
        setPersonajes(data)
    }

    console.log(personaje);

    return(
        <>
                <div className="title">

                    <h1>Listar Personajes</h1>
                </div>

                <div className="inputs">
                    <input type="text" name="episodio" placeholder='Ingrese un episodio' onChange={(e)=>setEpisodio(e.target.value)}/>
                </div>
                    <button onClick = {listarPersonajes}>Listar</button>
                <ul>
                    {personaje && personaje.map((per) => {
                    return (
                        <li>{per}</li>
                    )
                    }
                    )
                }
                </ul>
            </>

    )
}

export default Listar;