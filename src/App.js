import React, {Component} from 'react';
import './App.css';
import Mycars from './components/Mycars';

class App extends Component {

  state = {
    titre: 'Mon catalogue de Voitures'
  }

  changeTitle = (e) => {
    // console.log(e);
    /*Il est obligatoire de passer par cette méthode afin de changer l'objet titre*/
      this.setState ({
        titre: 'Mon nouveau catalogue de Voitures'
      })
  }
  changeViaParam = (titre) => { /*on passe titre en paramètre */
    this.setState({
      titre : titre /*on passe titre en attribut. on peut également écrire titre. Ceci fonctionnne si paramètre et titre ont le même nom */
    })
  }
  changeViaBind = (parametre) => { /*on passe parametre en paramètre */
    this.setState({
      titre : parametre /*on passe parametre en attribut. on peut également écrire titre. Ceci fonctionnne si paramètre et titre ont le même nom */
    })
  }
  changeViaInput = (e) => {
    console.log(e.target.value);
    this.setState({
      titre : e.target.value
    })
  }


  render(){
    return (
      <div className="App">
        <Mycars title={this.state.titre}/>
        <button onClick={this.changeTitle}> Changer le titre </button>
        <button onClick={() => this.changeViaParam('Changement titre via paramètre')}> Changer le titre via paramètre</button>
        <button onClick={this.changeViaBind.bind(this,'Changement titre via Bind')}> Changer le titre via Bind</button>
        <input type="text" onChange={this.changeViaInput} value={this.state.titre}/>
    </div>
    );
  }
}

export default App;
