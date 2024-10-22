import logo from './logo.svg';
import './App.css';
import Mostrar from './components/Mostrar';

function App() {
  function mostrarAlerta(){
    alert("Esto es una alerta");
  }

  return (
    <div className="App">
       <Mostrar mostrarAlerta={mostrarAlerta}/>
    </div>
  );
}

export default App;
