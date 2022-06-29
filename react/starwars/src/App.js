import Home from "./components/Home";
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Agregar from "./components/Agregar";
import Listar from "./components/Listar";
import Eliminar from "./components/Eliminar";

function App() {
  return (
      <>
      <Router>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/agregar' element = {<Agregar/>}/>
          <Route path = '/listar' element = {<Listar/>}/>
          <Route path = '/eliminar' element = {<Eliminar/>}/>
        </Routes>
      </Router>
      </>
  );
}

export default App;