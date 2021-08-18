import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
const Enlace = ({ activo, icono, exacto, texto, ruta, onClick}) => {
    return (
        <BarraLateralEnlace activo={activo} >
            <FontAwesomeIcon icon={icono}></FontAwesomeIcon>
            <NavLink to={ruta} exact={exacto} onClick={onClick}>{texto}</NavLink>
        </BarraLateralEnlace>
    );
}
const BarraLateralEnlace = styled.div`
    color: #f3f4f6;
    padding: 10px;
    border-radius: 3px;
    margin-bottom: 5px;
    a {
        text-decoration: none;
        color: #a5aaad;
        font-weight: 700;
      }
    svg {
        margin-right: 10px;
        font-size: 18px;
      }
      a.active{
        color: #3ea175 !important;
      }
    ${props => props.activo === true && css`
        background: rgba(62, 161, 117, 0.3);
        color: #3ea175;
    `}
`;
export default Enlace;