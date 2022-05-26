import React,{useState,useEffect} from 'react';

function Scroll(){
    const [scroll,setScroll] = useState(0);

    useEffect(()=>{
        //console.log("Ingreso al useEffect");
        const posicionScroll = () => setScroll(window.pageYOffset);
        window.addEventListener("scroll",posicionScroll);

    })

    return(
    <>
        <label>Scroll</label>
        <p>Scroll: {scroll}</p>
    </>)
}

export default Scroll;