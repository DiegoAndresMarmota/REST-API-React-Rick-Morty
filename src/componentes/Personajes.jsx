import React from 'react'

function Personajes({ personaje }) {
    return (
        /*9. Cada elemento(personaje) contenido en este div, esta asociado a una
        propiedad {name} o {image}*/
        <div>
            <h2>{personaje.name}</h2>
            <img src={personaje.image} alt="personaje.nombre" />
        </div>
    );
}

export default Personajes;
