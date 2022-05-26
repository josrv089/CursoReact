import React,{useState, useEffect} from 'react';

function BodyFuncional(){
    
    const [contador,setContador] = useState(0);
    const [contador2,setContador2] = useState(0);
    useEffect(()=>{

        console.log("Ejecución en el momento de Montaje");

    },[]);

    useEffect(()=>{
        console.log("Ejecución en el momento de Actualización");
    });

    useEffect(()=>{
        return()=>{
            console.log("Ejecución en momento de desmontaje")
        }
    });

    return(
        <>
        <h1>Body con componente funcional</h1>
        <label>{contador}</label>
        <button onClick={()=>{setContador(contador+1)}}>Aumentar</button>

        <button onClick={()=>{setContador2(contador2+1)}}>Aumentar C2</button>
        
        </>
    )
}

export default BodyFuncional;