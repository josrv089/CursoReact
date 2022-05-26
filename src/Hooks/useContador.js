import {useState} from 'react';

export const useContador = () =>{
    
    const[contador, setContador] = useState(0);

    const aumentar = () =>{
        setContador(contador+1);
    }

    const restar = () =>{
        setContador(contador-1);
    }

    const reiniciar = () =>{
        setContador(0);
    }
    return [
        contador,
        aumentar,
        restar,
        reiniciar
    ]
}