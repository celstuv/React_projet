import React, {Component} from 'react';
import Car from './Cars';

class Mycars extends Component {
  render() {
    return(
      <div>
        <h1> Hello React !</h1>
        <Car>Ford</Car>
        {/* Car est le props , Ford est l'objet*/}
        <Car>Mercedes</Car>
        <Car>Peugeot</Car>

      </div>
    )

  }
}

export default Mycars;
