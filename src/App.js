import React, { useState } from "react";
import BarraDeNavegacion from "./components/barraDeNavegacion/BarraDeNavegacion";
import BarraLateral from "./components/barraLaterral/BarraLateral";
import { BrowserRouter,Route, Switch  } from 'react-router-dom';
import Principal from "./components/principal/Principal";
import Formulario_1 from "./components/formulario/Formulario_1";
function App() {

  const [abrirBarraLateral, setabrirBarraLateral] = useState();

  const barraLateral = () => {
    setabrirBarraLateral(!abrirBarraLateral);
  }
  return (
    <BrowserRouter>
      <div className="contenedor">
        <BarraDeNavegacion abrirBarraLateral={abrirBarraLateral} barraLateral={barraLateral}></BarraDeNavegacion>
        <Switch>
          <Route path="/" exact={true} component={Principal}></Route>
         <Route path="/agregar" component={Formulario_1}></Route> 
        </Switch>
        <BarraLateral abrirBarraLateral={abrirBarraLateral} barraLateral={barraLateral}></BarraLateral>
      </div>
    </BrowserRouter>

  );
}

export default App;
