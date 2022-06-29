import React from 'react';
import Agregar from './Agregar';
import {Link} from 'react-router-dom'
import '../styles/Home.css'

const Home = () =>{
    return(
        <>
            <div className="titles">
                <h1>STAR WARS</h1>
                <h3>¿Que desea hacer?</h3>
            </div>

            <div className="buttons">
                <Link to='/agregar'>Agregar Personaje</Link>
                <Link to='/listar'>Listar Personajes</Link>
                <Link to='/eliminar'>Eliminar Personajes</Link>
            </div>
        
        </>
    )
}

export default Home;
