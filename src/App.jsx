import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/navbar/navbar";


function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greetings="Bienvenido usuario" />
    </>
  );
};

export default App;
