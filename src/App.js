import React, { useState } from "react";
import BarraDeNavegacion from "./components/barraDeNavegacion/BarraDeNavegacion";
import BarraLateral from "./components/barraLaterral/BarraLateral";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Clientes from "./components/formulario/Clientes";
import Licencias from "./components/formulario/Licencias";
import Login from './components/login/Login';
function App() {

  const [abrirBarraLateral, setabrirBarraLateral] = useState();
  const [tituFormulario, setTituloFormulario] = useState('');

  const barraLateral = () => {
    setabrirBarraLateral(!abrirBarraLateral);
  }

  return (
    <BrowserRouter>
      <Switch>
        <div className="contenedor">
          <BarraDeNavegacion abrirBarraLateral={abrirBarraLateral} barraLateral={barraLateral} tituFormulario={tituFormulario}></BarraDeNavegacion>
          <Route path="/Agregar/Cliente">
            <Clientes setTituloFormulario={setTituloFormulario}></Clientes>
          </Route>
          <Route path="/Agregar/Licencias">
            <Licencias setTituloFormulario={setTituloFormulario}></Licencias>
          </Route>
          <BarraLateral abrirBarraLateral={abrirBarraLateral} barraLateral={barraLateral}></BarraLateral>
        </div>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
