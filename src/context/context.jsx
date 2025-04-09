import React, { createContext, useContext, useState } from "react";
import Alert from '@mui/material/Alert';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {
  const [carrito, setCarrito] = useState([]);
  const [contador, setContador] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const agregarAlCarrito = (producto) => {
    const nuevoProducto = {
      ...producto,
      precio: Number(producto.precio),
      cantidad: Number(producto.cantidad),
    };

    if (carrito.some((el) => el.id === nuevoProducto.id)) {
      const newCarrito = carrito.map((el) => {
        if (el.id === nuevoProducto.id) {
          return {
            ...el,
            cantidad: Number(el.cantidad) + Number(nuevoProducto.cantidad),
          };
        } else {
          return el;
        }
      });
      setCarrito(newCarrito);
    } else {
      setCarrito([...carrito, nuevoProducto]);
    }
    setContador(1);
    setShowAlert(true); 
    setTimeout(() => {
      setShowAlert(false); 
    }, 3000); 
  };

  const eliminarProducto = (id) => {
    const newCarrito = carrito.filter((el) => el.id !== id);
    setCarrito(newCarrito);
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  return (
    <AppContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        contador,
        setContador,
        eliminarProducto,
        limpiarCarrito,
      }}
    >
      {props.children}
      {showAlert && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
          }}
        >
          <Alert severity="success">Producto agregado al carrito!</Alert>
        </div>
      )}
    </AppContext.Provider>
  );
};