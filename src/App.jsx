import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/Navbar/Navbar";
import ItemDetail from "./componentes/ItemDetail/ItemDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} /> 
          <Route path="/detalle/:id" element={<ItemDetail />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;