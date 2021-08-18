import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faClock } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
const BarraDeNavegacion = ({ barraLateral,tituFormulario }) => {
    return (
        <BarraNavegacion>
            <BarraNavegacionIcon onClick={() => barraLateral()}>
                <FontAwesomeIcon icon={faBars} />
            </BarraNavegacionIcon>
            <BarraDeNavegacionIzquierdo>
               <p>{tituFormulario}</p>
            </BarraDeNavegacionIzquierdo>
            <BarraDeNavegacionDerecha>
                {/* <a href="!#">
                    <FontAwesomeIcon icon={faSearch} />
                </a>
                <a href="!#">
                    <FontAwesomeIcon icon={faClock} />
                </a>
                <a href="!#">
                    <img width="30" src="http://placekitten.com/200/300" alt="avatar"></img>
                </a> */}
            </BarraDeNavegacionDerecha>
        </BarraNavegacion>);
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
      @media only screen and (max-width: 978px) {
          display: inline;
      }
`;
const BarraDeNavegacionIzquierdo = styled.div`
    p {
        margin-right: 20px;
        color: #34495e;
        font-size: 15px;
        font-weight: 700;
    }
    @media only screen and (max-width: 480px) {
          display: none;
      }
`;
const BarraDeNavegacionDerecha = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        margin-left: 20px;
        text-decoration: none;
      }
    a > svg {
        color: #a5aaad;
        font-size: 16px;
        border-radius: 50px;
        background: #ffffff;
        box-shadow: 2px 2px 5px #d9d9d9, -2px -2px 5px #ffffff;
        padding: 7px;
      }
`;
export default BarraDeNavegacion;