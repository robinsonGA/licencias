import React, { useState, useEffect } from 'react';
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../../elementos/Formulario';
import Input from '../Input';
import styled from 'styled-components';
const Licencias = ({ setTituloFormulario }) => {
    const [numeroSerie, setNumeroSerie] = useState({ campo: '', valido: null });
    const [tipo, setTipo] = useState({ campo: '', valido: null });
    const [fechaCreacion, setFechaCreacion] = useState({ campo: '', valido: null });
    const [fechaVencimiento, setFechaVencimiento] = useState({ campo: '', valido: null });
    const [dispositivos, setDispositivos] = useState({ campo: '', valido: null });
    const [terminos, setTerminos] = useState(false);
    const [formularioValido, setFormularioValido] = useState(null);
    useEffect(() => {
        setTituloFormulario('formulario para agregar licencias');
    }, [setTituloFormulario])
    const expresiones = {
        serie: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        tipo: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        fecha: /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/,
        dispositivos: /^[0-9]{1,2}$/ // solo acepta numeros
    }
    const onChangeTerminos = (e) => {
        setTerminos(e.target.checked);
    }
    const onsubmit = (e) => {
        e.preventDefault();

        if (
            numeroSerie.valido === 'true' &&
            tipo.valido === 'true' &&
            fechaCreacion.valido === 'true' &&
            fechaVencimiento.valido === 'true' &&
            dispositivos.valido === 'true' &&
            terminos
        ) {
            setFormularioValido(true)
            setNumeroSerie({ campo: '', valido: null });
            setTipo({ campo: '', valido: null });
            setFechaCreacion({ campo: '', valido: null });
            setFechaVencimiento({ campo: '', valido: null });
            setDispositivos({ campo: '', valido: null });
        }
        else {
            setFormularioValido(false)
        }
    }
    return (
        <Contenedor>
            <Formulario action="" onSubmit={onsubmit}>
                <Input
                    estado={numeroSerie}
                    cambiarEstado={setNumeroSerie}
                    tipo="text"
                    label="N° serie"
                    placeholder="ddfsdf-dfsdf-dfdsf-dfsdf"
                    name="serie"
                    leyendaError="La serie solo puede contener Letras, numeros, guion y guion_bajo minimo 4 caracteres."
                    expresionRegular={expresiones.serie}
                />
                <Input
                    estado={tipo}
                    cambiarEstado={setTipo}
                    tipo="text"
                    label="Tipo"
                    placeholder="no lo se"
                    name="tipo"
                    leyendaError="El tipo solo puede contener letras y espacios, pueden llevar acentos."
                    expresionRegular={expresiones.tipo}
                />
                <Input
                    estado={fechaCreacion}
                    cambiarEstado={setFechaCreacion}
                    tipo="date"
                    label="Fecha de Creacion"
                    placeholder=""
                    name="fechaCreacion"
                    leyendaError="solo acepta fechas"
                    expresionRegular={expresiones.fecha}
                />
                <Input
                    estado={fechaVencimiento}
                    cambiarEstado={setFechaVencimiento}
                    tipo="date"
                    label="Fecha de vencimiento"
                    placeholder=""
                    name="fechaVencimineto"
                    leyendaError="solo acepta fechas"
                    expresionRegular={expresiones.fecha}
                />
                <Input
                    estado={dispositivos}
                    cambiarEstado={setDispositivos}
                    tipo="number"
                    label="Dispositivos a usar"
                    placeholder="2"
                    name="telefono"
                    leyendaError="solo puede uncluir numeros"
                    expresionRegular={expresiones.dispositivos}
                />
                <ContenedorTerminos>
                    <Label>
                        <input
                            type="checkbox"
                            name="terminos"
                            id="terminos"
                            checked={terminos}
                            onChange={onChangeTerminos}
                        ></input>
                        acepto terminos y condiciones
                    </Label>
                </ContenedorTerminos>
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
    padding: 40;
  grid-area: principal;
`;

export default Licencias;