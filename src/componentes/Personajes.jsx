import React from "react";

function Personajes({ personaje }) {
  return (
    /*9. Cada elemento(personaje) contenido en este div, esta asociado a una
        propiedad {name} o {image}*/
    <div className="text-center p-5">
      <h3>{personaje.name}</h3>
      <img
        className="img-fluid rounded-pill border border-dark border-3"
        src={personaje.image}
        alt="personaje.nombre"
      />
      <p>{personaje.origin.name}</p>
    </div>
  );
}

export default Personajes;
