import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greetings="¡Bienvenido! Pide tu comida favorita y recíbela en minutos." />
    </>
  );
};

export default App;
