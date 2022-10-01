import { useEffect, useState } from "react";
import Personajes from "./Personajes";

function ListaPersonajes() {
  /*6. Crear un useState */
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    /*4. Se crea la f(datosFetch)*/
    async function datosFetch() {
      /*1.Se realiza la petición(asincrona con el await) al back-end del API de Rick and Morty*/
      const esperarFetch = await fetch(
        "https://rickandmortyapi.com/api/character"
      );

      /*2.Convertir los datos en un json y se almacena en un const*/
      const datosAlmacenados = await esperarFetch.json();

      /*3. La const se muestra por consola
                        console.log(datosAlmacenados)*/
      /*7. Guardar los "results" de los datosAlamacenados en el useState*/
      setPersonajes(datosAlmacenados.results);
    }

    /*5. Se llama la f(datosFetch)*/
    datosFetch();
  }, []);

  return (
    <div className="container bg-success">
      {/*8.Voy a recorrer(map) cada elemento(personaje) de personajes, retornando sus datos en el div, siendo <h2> y <img>*/}
      <div className="row">
        {personajes.map((personaje) => {
          return (
            <div className="col-md-4" key={personaje.id}>
              <Personajes personaje={personaje} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListaPersonajes;
