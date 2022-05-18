import logo from './logo.svg';
import './App.css';
import HolaMundo,{HolaMundo2,HolaMundo3} from './components/HolaMundo';

import HolaMundoSinJSX from './components/HolaMundoSinJSX';
function App() {


  return (
    <div className="App">
      <header className="App-header">

        <HolaMundo></HolaMundo>
        <HolaMundoSinJSX></HolaMundoSinJSX>

        
        <HolaMundo2></HolaMundo2>
        <HolaMundo3></HolaMundo3>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
