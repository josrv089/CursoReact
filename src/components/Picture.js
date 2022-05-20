import React from 'react';
import Imagen from './Imagen';

export default function Picture({imagen,handleClick}){

    return(
        <>  <label htmlFor="imagen">
                <Imagen imagen={imagen}></Imagen>
            </label>
            <input 
                id="imagen"
                type="file"
                onChange={handleClick}
                multiple={false}
                style={{display: 'none'}}
            />
        </>
    )
}
