import React, {Component} from 'react';
import Car from './Cars';

class Mycars extends Component {

  // noCopy = () => { /*Fonction fléchée*/
  //   alert('Merci de ne pas copier le texte');
  // }
  // addStyle = (e) => {
  //   // console.log(e.target);
  //     e.target.classList.toggle('styled')
      /*
      Deuxième méthode
      if (e.target.classList.contains('styled') ) {
          e.target.classList.remove('styled');
      } else {
          e.target.classList.add('styled');
      }
}  */

state ={
  voitures :[
    {name: "Ford", color: "red", year:2000},
    {name: "Mercedes", color: "black", year:2010},
    {name: "Peugeot", color: "green", year:2018},
  ]
}

addTenYears = () => {
  // console.log('activé');
  const updatedState = this.state.voitures.map((param) => {
    return param.year -= 10;
  })
  this.setState({
    updatedState
  })
}
  render() {

    const year = new Date().getFullYear(); //obtenir l'année d'une date.
    // console.log(this);
    /* console.log affiche props: {title: "Mon Catalogue de Voitures"}*/
    return(
      <div>
        <h1 /*onMouseOver={this.addStyle}*/> {this.props.title}</h1>

        <button onClick={this.addTenYears}> + 10 ans </button>

        <p /*onCopy={this.noCopy}*/> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
{
        // <Car  color={this.state.voitures[0].color} year={year - this.state.voitures[0].year + ' ans'}>{this.state.voitures[0].name}</Car>
        // {/* Car est le props , Ford est l'objet*/}
        // <Car color={this.state.voitures[1].color} year={year - this.state.voitures[1].year + ' ans'}>{this.state.voitures[1].name}</Car>
        // <Car color={this.state.voitures[2].color} year={year - this.state.voitures[2].year + ' ans'}>{this.state.voitures[2].name}</Car>
}
        { //c'est du javascript donc il faut mettre les accolades
          //cette formule permet de parcourir le tableau state
          this.state.voitures.map((voiture, index) => {
            return (
              <div key={index}>
                <Car  color={voiture.color} year={year - voiture.year + ' ans'}>{voiture.name}</Car>
                {//Deuxième méthode
                // <Car  name={voiture.name} color={voiture.color} year={year - voiture.year + ' ans'} />
                }
              </div>
            )
          })
        }

      </div>
    )

  }
}

export default Mycars;
