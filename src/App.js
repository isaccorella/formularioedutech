import react, { Component } from 'react'
import Sirva from './Componentes/Sirva';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
  return (
    <form>
    <div className="App container">
      <div className="jumbotron">
        <p className="lead text-center">FORMULARIO </p>
        <Sirva />
        </div>
        </div>
     </form>
    
  );
  }

}
export default App;
