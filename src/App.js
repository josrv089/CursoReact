import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeaderFuncional from './components/HeaderFuncional';
import React,{useState} from 'react';
import Footer, { FooterFuncional,FooterArrow } from './components/Footer';

function App() {
  const[contador,setContador] = useState(0);

  function handlerContador(){
    setContador(contador+1);
  }

  return (
    <div className="App">
      <header className="App-header">
        

        <Header nombre={"Josue"} > </Header>
        <Header nombre={"Juan"} > </Header>
        <Header nombre={"Diego"} > </Header>
        
        <HeaderFuncional titulo1={"Esta es mi aplicación..."} 
            titulo2={"Gracias por usar la aplicación"}
            contador={contador}
            handlerContador={handlerContador}
          /> 

      </header>
      
      <Footer email={"email1@email.com"}></Footer>
      --
      <FooterFuncional email={"email2@email.com"}></FooterFuncional>
      --
      <FooterArrow email={"otro@email.com"}></FooterArrow>
    </div>
  );
}

export default App;
