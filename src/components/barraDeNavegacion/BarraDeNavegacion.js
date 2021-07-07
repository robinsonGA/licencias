import './barraDeNavegacion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faClock } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
const BarraDeNavegacion = ({ abrirBarraLateral, barraLateral }) => {
    return (

        <nav className="barra-navegacion">
            <div className="barra-navegacion-icono" onClick={() => barraLateral()}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="barra-navegacion__izquierda">
                <a href="#"> opcion 1</a>
                <a href="#"> opcion 2</a>
                <a className="enlace-activo" href="#">opcion 3</a>
            </div>
            <div className="barra-navegacion__derecha">
                <a href="#">
                    <FontAwesomeIcon icon={faSearch} />
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faClock} />
                </a>
                <a href="#">
                    <img width="30" src="http://placekitten.com/200/300" alt="avatar"></img>
                </a>
            </div>
        </nav>);
}

const BarraNavegacion = styled.nav`
    background: #ffffff;
    grid-area: nav;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px 0 30px;
    border-bottom: 1px solid lightgray;
`;
const BarraNavegacionIcon = styled.div`
    display: none;    
    svg {
        font-size: 26px;
        color: #a5aaad;
      }
`;
const BarraDeNavegacionIzquierdo= styled.div`
    a {
        margin-right: 20px;
        text-decoration: none;
        color: #a5aaad;
        font-size: 15px;
        font-weight: 700;
    }
`;
export default BarraDeNavegacion;