import React, {Component} from 'react';
import './App.css';
import Mycars from './components/Mycars';

class App extends Component {

  state = {
    titre: 'Mon catalogue de Voitures'
  }

  render(){
    return (
      <div className="App">
        <Mycars title={this.state.titre}/>
        <button> Changer le titre </button>
      </div>
    );
  }
}

export default App;
