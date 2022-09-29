import ListaPersonajes from "./componentes/ListaPersonajes";

function App() {
  return (
    <div>
      <h1>Rick and Morty</h1>
      {/*Se crea un componente y se importa, que será llamado de App.js */}
      <ListaPersonajes />
    </div>
  );
}

export default App;
