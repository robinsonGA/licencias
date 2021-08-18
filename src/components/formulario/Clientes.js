import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../../elementos/Formulario';
import Input from '../Input';
const Clientes = ({ setTituloFormulario }) => {
  const [nombre, setNombre] = useState({ campo: '', valido: null });
  const [apellido, setApellido] = useState({ campo: '', valido: null });
  const [correo, setCorreo] = useState({ campo: '', valido: null });
  const [telefono, setTelefono] = useState({ campo: '', valido: null });
  const [direccion, setDireccion] = useState({ campo: '', valido: null });
  const [formularioValido, setFormularioValido] = useState(null);
  useEffect(() => {
    setTituloFormulario('formulario para agregar clientes')
  }, [setTituloFormulario])
  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    direccion: /^[a-zA-Z0-9À-ÿ\s]{1,40}$/,//Letras,espacios y numeros, pueden llevar acentos
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }
  const onsubmit = (e) => {
    e.preventDefault();

    if (
      nombre.valido === 'true' &&
      apellido.valido === 'true' &&
      correo.valido === 'true' &&
      telefono.valido === 'true' &&
      direccion.valido === 'true'
    ) {
      setFormularioValido(true)
      setNombre({ campo: '', valido: null });
      setApellido({ campo: '', valido: null });
      setCorreo({ campo: '', valido: null });
      setTelefono({ campo: '', valido: null });
      setDireccion({ campo: '', valido: null });
    }
    else {
      setFormularioValido(false)
    }
  }
  return (
    <Contenedor>
      <Formulario action="" onSubmit={onsubmit}>
        <Input
          estado={nombre}
          cambiarEstado={setNombre}
          tipo="text"
          label="Nombre"
          placeholder="Aquiles"
          name="usuario"
          leyendaError="El nombre solo puede contener letras y espacios."
          expresionRegular={expresiones.nombre}
        />
        <Input
          estado={apellido}
          cambiarEstado={setApellido}
          tipo="text"
          label="Apellidos"
          placeholder="Castro"
          name="apellido"
          leyendaError="El apellido solo puede contener letras y espacios."
          expresionRegular={expresiones.nombre}
        />
        <Input
          estado={correo}
          cambiarEstado={setCorreo}
          tipo="email"
          label="Correo Electrónico"
          placeholder="Aquiles@correo.com"
          name="correo"
          leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          expresionRegular={expresiones.correo}
        />
        <Input
          estado={telefono}
          cambiarEstado={setTelefono}
          tipo="text"
          label="Teléfono"
          placeholder="4491234567"
          name="telefono"
          leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
          expresionRegular={expresiones.telefono}
        />
        <Input
          estado={direccion}
          cambiarEstado={setDireccion}
          tipo="text"
          label="Direccion"
          placeholder="varita de nardo 1273"
          name="direccion"
          leyendaError="La direccion solo puede tener letras,numeros y espacios"
          expresionRegular={expresiones.direccion}
        />
        {formularioValido === false &&
          <MensajeError>
            <p>
              <i className="fas fa-exclamation-triangle"></i>
              <b>Error:</b> pro favor rellenar el formulario correctamente</p>
          </MensajeError>}
        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
          {formularioValido === true && <MensajeExito>Formulario enviado exitosamente</MensajeExito>}
        </ContenedorBotonCentrado>
      </Formulario>
    </Contenedor>
  );
}
const Contenedor = styled.div`
  width: 90%;
  margin: auto;
  grid-area: principal;
`;
export default Clientes;