import React from 'react';
import {useContador} from '../Hooks/useContador'
export default function Contador(){

    const [contador,aumentar,restar,reiniciar] = useContador();

    return (
        <div>
            <label>Contar por medio del hook: {contador}</label>
            <br/>
            <div>
                <button onClick={aumentar}>Aumentar</button>

                <button onClick={restar}>restar</button>

                <button onClick={reiniciar}>reiniciar</button>
            </div>

        </div>
        )
}