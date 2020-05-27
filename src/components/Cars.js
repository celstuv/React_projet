import React from 'react';

const Car = (props) => {
  /*  Dans le fichier parent MyCar.js, <Car>Ford</Car> : Car est le props , Ford est l'objet */
  // console.log(props);
  /* console log affiche {children: "Ford"}*/
  // console.log(props.children);
  /* console log affiche Ford */
  return(
    <div className="car">
      <p>Marque : {props.children}</p>
      <p>Couleur : </p>
    </div>
  )
}

export default Car;
