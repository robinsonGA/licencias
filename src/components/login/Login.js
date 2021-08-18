import React, { useState } from 'react';
import styled from 'styled-components';
import { Formulario, Boton } from '../../elementos/Formulario';
import Input from '../Input';
const URL_LOGIN = "http://localhost/sesion/index.php";
const enviarDatos = async (url, data) => {
  const respuesta = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
  });
  const json = await respuesta.json();
  console.log(json);
}
const Login = () => {
  const [correo, setCorreo] = useState({ campo: '', valido: null })
  const [password, setpassword] = useState({ campo: '', valido: null });
  const expresiones = {
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }

  const onsubmit = (e) => {
    e.preventDefault();
    const data = {
      "correo": correo,
      "password": password
    }

    enviarDatos(URL_LOGIN, data);
  }
  return (
    <div className="login">
      <FormularioLogin>
        <Logo>
          {/*   <img src="http://placekitten.com/200/300" alt="Avatar" /> */}
          <h2> inicar sesion</h2>
        </Logo>
        <Formulario action="" onSubmit={onsubmit}>
          <Input
            estado={correo}
            cambiarEstado={setCorreo}
            tipo="email"
            label="Correo"
            placeholder="Castro@ejemplo.com"
            name="correo"
            leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
            expresionRegular={expresiones.correo}
          />
          <Input
            estado={password}
            cambiarEstado={setpassword}
            tipo="password"
            label="contraseña"
            placeholder="123"
            name="password"
            leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
            expresionRegular={expresiones.password}
          />
          <Boton login type="submit">Enviar</Boton>
        </Formulario>
      </FormularioLogin>

    </div>
  );
}
const FormularioLogin = styled.div`
     margin:10px;
`;
const Logo = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    img{
      width:200px;
      height:200px;
      border-radius: 50%; 
    }
`;
export default Login;