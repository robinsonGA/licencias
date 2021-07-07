import './Barralateral.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faBuilding, faCalendar, faFile, faHandshake, faHome, faQuestion, faSignOutAlt, faTimes, faUserSecret, faWrench, faBriefcase, faMoneyCheck, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import Enlace from './Enlace';
const BarraLateral = ({ abrirBarraLateral, barraLateral }) => {
    const [enlaces, setEnlaces] = useState(
        [
            {
                id: 1,
                icono: faHome,
                exact: true,
                texto: 'Inicio',
                ruta: './'
            },
            {
                id: 2,
                icono: faUserSecret,
                exact: false,
                texto: 'Agregar',
                ruta: '/agregar'
            },
            {
                id: 3,
                icono: faBuilding,
                exact: false,
                texto: 'menu 2',
                ruta: 'jjj'
            },
            {
                id: 4,
                icono: faWrench,
                exact: false,
                texto: 'menu 3',
                ruta: 'df'
            },
            {
                id: 5,
                icono: faArchive,
                exact: false,
                texto: 'menu 4',
                ruta: 'dfd'
            },
            {
                id: 6,
                icono: faHandshake,
                exact: false,
                texto: 'menu 5',
                ruta: 'dfd'
            },
            {
                id: 7,
                icono: faQuestion,
                exact: false,
                texto: 'menu 6',
                ruta: 'dfdf'
            },
            {
                id: 8,
                icono: faSignOutAlt,
                exact: false,
                texto: 'menu 7',
                ruta: 'dff'
            },
            {
                id: 9,
                icono: faCalendar,
                exact: false,
                texto: 'menu 8',
                ruta: 'fgfg'
            },
            {
                id: 10,
                icono: faFile,
                exact: false,
                texto: 'menu 9',
                ruta: 'fgf'
            },
            {
                id: 11,
                icono: faMoneyCheck,
                exact: false,
                texto: 'menu 10',
                ruta: 'fgfg'
            }
        ]
    )
    const [targetaSeleccionada, setTargetaSeleccionada] = useState(0);
    const cambio = (id) => {
        let hola = setTargetaSeleccionada(id);
        console.log(hola);
    }
    return (
        <div className={abrirBarraLateral ? "barra-lateral-sensible" : ""} id="barraLateral">
            <div className="barra-lateral__titulo">
                <div className="barra-lateral__img">
                    <img src="http://placekitten.com/200/300" alt="logo" />
                    <h1>titulo</h1>
                </div>
                <FontAwesomeIcon id="barraLateralIcon" icon={faTimes} onClick={() => barraLateral()}></FontAwesomeIcon>
            </div>
            <div className="barra-lateral__menu">
                {
                    enlaces.map((enlace) => {
                        console.log(enlace.id);
                        return (
                            <Enlace className={`barra-lateral__enlace ${targetaSeleccionada === enlace.id ? 'enlace-menu-activo' : ''}`}
                                key={enlace.id}
                                id={enlace.id}
                                icono={enlace.icono}
                                exacto={enlace.exact}
                                texto={enlace.texto}
                                ruta={enlace.ruta}
                                onClick={()=>{cambio(enlace.id)}}
                            ></Enlace>
                        );

                    })
                }
                <div className="barra-lateral__cerrar">
                    <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
                    <a>menu 11</a>
                </div>
            </div>

        </div>
    );
}

export default BarraLateral;