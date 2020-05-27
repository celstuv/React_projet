import React, {Component} from 'react';
import Car from './Cars';

class Mycars extends Component {

  noCopy = () => { /*Fonction fléchée*/
    alert('Merci de ne pas copier le texte');
  }
  addStyle = (e) => {
    // console.log(e.target);
      e.target.classList.toggle('styled')
      /*
      Deuxième méthode
      if (e.target.classList.contains('styled') ) {
          e.target.classList.remove('styled');
      } else {
          e.target.classList.add('styled');
      }
      */

}

  render() {
    // console.log(this);
    /* console.log affiche props: {title: "Mon Catalogue de Voitures"}*/
    return(
      <div>
        <h1 onMouseOver={this.addStyle}> {this.props.title}</h1>
        <p onCopy={this.noCopy}> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <Car color="red">Ford</Car>
        {/* Car est le props , Ford est l'objet*/}
        <Car color="">Mercedes</Car>
        <Car color="green"></Car>

      </div>
    )

  }
}

export default Mycars;
