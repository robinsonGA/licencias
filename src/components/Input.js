import React from 'react';
import { Label, GrupoInput, Input, LeyendaError, IconoValidacion } from '../elementos/Formulario';
const ComponenteInput = ({ estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion }) => {
    const onChange = (e) => {
        cambiarEstado({ ...estado, campo: e.target.value })
    }

    const validacion = () => {
        //comprobar si existe una expresion regular y validar el campo
        if (expresionRegular) {
            if (expresionRegular.test(estado.campo)) {
                cambiarEstado({ ...estado, valido: 'true' });
            } else {
                cambiarEstado({ ...estado, valido: 'false' });
            }
        }
        if (funcion) {
            funcion();
        }
    }
    return (
        <div>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
            <GrupoInput>
                <Input
                    type={tipo}
                    placeholder={placeholder}
                    id={name}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                />
                <IconoValidacion className={estado.valido === 'true' ? "fas fa-check-circle" : "fas fa-times-circle"} valido={estado.valido} />
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
    );
}

export default ComponenteInput;