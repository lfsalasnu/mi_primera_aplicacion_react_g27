import logo from './logo.svg';
import './App.css';
import Navegacion from './Componentes/Navegacion';
import Tarjetas from './Componentes/Tarjetas';
import Cargar from './Componentes/Cargar';
//import Pie_pagina from './Componentes/Pie_pagina';

function App() {
  return (
    <div className="App">
      <Navegacion titulo="Barra1" enlace4h={true}/>
      <Cargar/>
      
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leer React
        </a>
      </header>
            
    </div>
  );
}

export default App;
