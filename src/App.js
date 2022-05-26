import logo from './logo.svg';
import './App.css';
import Body from './Components/Body';
import BodyFuncional from './Components/BodyFuncional';
import Reloj from './Components/Reloj';
import Contador from './Components/Contador';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Contador></Contador>

      <Login></Login>

       {/* <Reloj></Reloj>
       <Body></Body> */}
       

      </header>
    </div>
  );
}

export default App;
