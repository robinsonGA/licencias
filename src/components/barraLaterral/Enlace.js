import React from 'react';
import './Enlace.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
const Enlace = ({id,icono,exacto,texto,ruta,onClick,className}) => {
    return (
        <div className={className}>
            <FontAwesomeIcon icon={icono}></FontAwesomeIcon>
            <NavLink to={ruta} exact={exacto} onClick={onClick}>{texto}</NavLink>
        </div>
    );
}

export default Enlace;