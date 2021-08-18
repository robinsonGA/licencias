import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faTimes, faUserPlus, faMoneyCheck, faPowerOff, faTable, faEdit } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Enlace from './Enlace';
import styled, { css } from 'styled-components';
const BarraLateral = ({ abrirBarraLateral, barraLateral }) => {
    const [enlaces] = useState(
        [
            {
                id: 1,
                icono: faHome,
                exact: true,
                texto: 'Inicio',
                ruta: '/'
            },
            {
                id: 2,
                icono: faUserPlus,
                exact: false,
                texto: 'Agregar Clientes',
                ruta: '/Agregar/Cliente'
            },

            {
                id: 3,
                icono: faEdit,
                exact: false,
                texto: 'Modificar Clientes',
                ruta: '/Modifcar/Clientes'
            },
            {
                id: 4,
                icono: faUserPlus,
                exact: false,
                texto: 'Agregar Licencias',
                ruta: '/Agregar/Licencias'
            },
            {
                id: 5,
                icono: faEdit,
                exact: false,
                texto: 'Modificar Licencias',
                ruta: '/Modifcar/Licencias'
            },
            {
                id: 6,
                icono: faTable,
                exact: false,
                texto: 'Consultas',
                ruta: '/Consulta'
            },
            {
                id: 7,
                icono: faMoneyCheck,
                exact: false,
                texto: 'menu 10',
                ruta: 'fgfg'
            }
        ]
    )
    const [targetaSeleccionada, setTargetaSeleccionada] = useState(1);
    const cambio = (id) => {
        setTargetaSeleccionada(id);
        //console.log(hola)
    }
    return (
        <NavegacionLateral abrirbarralateral={abrirBarraLateral} id="barraLateral">
            <BarraLateralTitulo>
                <BarraLateralImg>
                    <img src="http://placekitten.com/200/300" alt="logo" />
                    <h1>ArcaTec</h1>
                </BarraLateralImg>
                <FontAwesomeIcon id="barraLateralIcon" icon={faTimes} onClick={() => barraLateral()}></FontAwesomeIcon>
            </BarraLateralTitulo>
            <div className="barra-lateral__menu">
                {
                    enlaces.map((enlace) => {
                        return (
                            <Enlace activo={targetaSeleccionada === enlace.id}
                                key={enlace.id}
                                id={enlace.id}
                                icono={enlace.icono}
                                exacto={enlace.exact}
                                texto={enlace.texto}
                                ruta={enlace.ruta}
                                onClick={() => { cambio(enlace.id) }}
                            ></Enlace>
                        );

                    })
                }
                <BarraLateralCerrar>
                    <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
                    <a href="#">Salir</a>
                </BarraLateralCerrar>
            </div>

        </NavegacionLateral>
    );
}
const NavegacionLateral = styled.div`
    background: #2c3e50;
    grid-area: barra-lateral;
    padding: 20px;
    overflow-y: auto;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
 ${props => props.abrirbarralateral === true && css`
    display: inline !important;
    z-index: 9999 !important;
    left: 0 !important;
    position: absolute;
 `}
 @media only screen and (max-width: 978px) {
      display: none;
  }
`;
const BarraLateralImg = styled.div`
    display: flex;
    align-items: center;
    img {
        margin-right:10px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: contain;
    }
`;
const BarraLateralTitulo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f3f4f6;
    margin-bottom: 30px;
    h1 {
        font-size: 18px;
        display: inline;
    }
    
    svg {
        font-size: 18px;
        display: none;
    }
@media only screen and (max-width: 978px) {
    svg {
        display: inline;
  }
}
`;
const BarraLateralCerrar = styled.div`
    margin-top: 20px;
    padding: 10px;
    color: #e65061;
    a {
        text-decoration: none;
        color: #e65061;
        font-weight: 700;
        text-transform: uppercase;
      }
      svg {
        margin-right: 10px;
        font-size: 18px;
      }
`;
export default BarraLateral;