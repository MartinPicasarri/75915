import { Link } from "react-router-dom"
import { useAppContext } from "../../context/context"
import "./Cart.css"

function Cart() {
  const { carrito, eliminarProducto, limpiarCarrito } = useAppContext()

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
      {carrito.length > 0 ? (
        <>
          {carrito.map((el) => {
            const precio = Number(el.precio)
            const cantidad = Number(el.cantidad)
            const subtotal = precio * cantidad

            return (
              <div
                key={el.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "solid 1px gray",
                  width: "80%",
                  maxWidth: "500px",
                  margin: "10px 0",
                  padding: "15px",
                  borderRadius: "8px",
                }}
              >
                <p>
                  <strong>{el.nombre}</strong>
                </p>
                <p>Precio: ${precio.toFixed(2)}</p>
                <p>Cantidad: {cantidad}</p>
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <button
                  onClick={() => eliminarProducto(el.id)}
                  style={{
                    backgroundColor: "#ff4d4d",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  Eliminar del carrito
                </button>
              </div>
            )
          })}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "80%",
              maxWidth: "500px",
            }}
          >
            <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Total: ${carrito.reduce((acc, el) => acc + Number(el.precio) * Number(el.cantidad), 0).toFixed(2)}
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
              <button
                onClick={() => limpiarCarrito()}
                style={{
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Limpiar carrito
              </button>
              <Link to="/checkout">
                <button
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Finalizar compra
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <p style={{ fontSize: "1.2rem", margin: "50px 0" }}>Carrito vacío</p>
      )}
    </div>
  )
}

export default Cart
