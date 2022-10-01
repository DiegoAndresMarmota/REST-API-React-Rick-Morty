import ListaPersonajes from "./componentes/ListaPersonajes";

function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">Rick and Morty</h1>
      {/*Se crea un componente y se importa, que será llamado de App.js */}
      <ListaPersonajes />
    </div>
  );
}

export default App;
