import { useEffect, useState } from "react";
import Personajes from "./Personajes";

function Pagina({ pagina, setPagina }) {
  return (
    <div
      className="d-flex align-items-center justify-content-between">
      <button
        className="btn btn-success btn-sm"
        onClick={() => { setPagina(pagina + 1) }}>
        Página: {pagina - 1}
      </button>
      <p
        className="pt-2">
        Página Actual: {pagina}
      </p>
      <button
        className="btn btn-success btn-sm"
        onClick={() => { setPagina(pagina + 1)}}>
        Página: {pagina + 1}
      </button>
    </div>
  );
}

function ListaPersonajes() {
  /*6. Crear un useState */
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  /*A. Cuando carga la pagina, se carga en la pag. 1*/
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    /*4. Se crea la f(datosFetch)*/
    async function datosFetch() {
      /*1.Se realiza la petición(asincrona con el await) al back-end del API de Rick and Morty*/
      const esperarFetch = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);

      /*2.Convertir los datos en un json y se almacena en un const*/
      const datosAlmacenados = await esperarFetch.json();

      setCargando(false);

      /*3. La const se muestra por consola
                            console.log(datosAlmacenados)*/
      /*7. Guardar los "results" de los datosAlamacenados en el useState*/
      setPersonajes(datosAlmacenados.results);
    }

    /*5. Se llama la f(datosFetch)*/
    datosFetch();
    /*C. El useEffect pendiente de este valor [pagina]*/
  }, [pagina]);

  return (
    <div className="container text-white border-2">

      {/*B. Al dar un click en el componente Pagina, se actualiza la pagina actual y el boton con la pagina subsiguiente*/}
      <Pagina
        pagina={pagina}
        setPagina={setPagina}
      />

      {/*8.Voy a recorrer(map) cada elemento(personaje) de personajes, retornando sus datos en el div, siendo <h2> y <img>*/}
      {cargando ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {personajes.map((personaje) => {
            return (
              <div className="col-md-4" key={personaje.id}>
                <Personajes personaje={personaje} />
              </div>
            );
          })}
        </div>
      )}
      <Pagina
        pagina={pagina}
        setPagina={setPagina}
      />
    </div>
  );
}

export default ListaPersonajes;
