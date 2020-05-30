import React from 'react';

const Car = (props) => {
  /*  Dans le fichier parent MyCar.js, <Car>Ford</Car> : Car est le props , Ford est l'objet */

  const colorInfo = props.color ? <p>Couleur : {props.color}</p> : <p>Couleur : Néant</p>;

  if(props.children) {
    return(
      <div className="car">
        <p>Marque : {props.children}</p>
        <p>Année : {props.year}</p>
        <p>{colorInfo}</p>
      </div>
      )
    } else {
       return null;
       { // DEUXIEME METHODE (
      //   <div className="data" style={ {backgroundColor:"#d63031", width:"400px",padding:"10px",margin:"5px auto"} }>
      //       <p>Pas de data</p>
      //   </div>
      //   )
      }
      }
  }

export default Car;


/* DEUXIEMME METHODE

const Car = ( {children, color, year} ) => {  -  remplacer par const Car = ( {name, color, year} ) => {  si on utilise laméthode ligne 62 dans Cars;js

const colorInfo = color ? (<p>Couleur : {color}</p>) : (<p>Couleur : Néant</p>);


/*  Dans le fichier parent MyCar.js, <Car>Ford</Car> : Car est le props , Ford est l'objet */
// console.log(props);
/* console log affiche {children: "Ford"} et className: "red"*/
// console.log(props.children);
/* console log affiche Ford et red //

  return(
    <div className="car">
      <p>Marque : {children}</p> -  remplacer par <p>Marque : {name}</p> si on utilise laméthode ligne 62 dans Cars;js
      <p>Année : {year}</p>
      <p>Couleur : {color}</p>
    </div>
  )
}

export default Car;

*/
