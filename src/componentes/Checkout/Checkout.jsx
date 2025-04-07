import { useState } from "react"
import { useAppContext } from "../../context/context"
import "./Checkout.css"
import { useNavigate } from "react-router-dom"
import { db } from "../../firebaseConfig"
import { collection, addDoc } from "firebase/firestore"

function Checkout() {
  const navigate = useNavigate()
  const { carrito, limpiarCarrito } = useAppContext()

  const [formData, setFormData] = useState({
    nombre: "",
    ubicacion: "",
    telefono: "",
  })

  const [errors, setErrors] = useState({
    nombre: "",
    ubicacion: "",
    telefono: "",
  })

  const getTotalAmount = () => {
    return carrito.reduce((total, item) => {
      return total + Number(item.precio) * Number(item.cantidad)
    }, 0)
  }

  const modificarInput = (e) => {
    const { value, name } = e.target 

    setErrors({
      ...errors,
      [name]: "",
    })

    if (name === "telefono") {
      if (!/^\d*$/.test(value)) {
        setErrors({
          ...errors,
          telefono: "Solo se permiten números",
        })
        return
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const crearOrden = async (e) => {
    e.preventDefault()
    let hasErrors = false
    const newErrors = {
      nombre: "",
      ubicacion: "",
      telefono: "",
    }

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio"
      hasErrors = true
    }

    if (!formData.ubicacion.trim()) {
      newErrors.ubicacion = "La ubicación es obligatoria"
      hasErrors = true
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio"
      hasErrors = true
    } else if (formData.telefono.length !== 10) {
      newErrors.telefono = "El teléfono debe tener 10 dígitos"
      hasErrors = true
    }

    setErrors(newErrors)

    if (hasErrors) {
      return
    }

    try {
      const ordersCollection = collection(db, "orders")

      const totalAmount = getTotalAmount()
      const order = {
        buyer: formData,
        items: carrito,
        total: totalAmount,
        date: new Date().toISOString(),
      }

      const docRef = await addDoc(ordersCollection, order)
      console.log("Orden creada con ID:", docRef.id)

      limpiarCarrito()

      setFormData({
        nombre: "",
        ubicacion: "",
        telefono: "",
      })

      alert(`¡Gracias por tu compra! Tu número de orden es: ${docRef.id}`)
      navigate("/")
    } catch (error) {
      console.error("Error al crear la orden:", error)
      alert("Hubo un error al procesar tu orden. Por favor, intenta nuevamente.")
    }
  }

  return (
    <div className="orden">
      <form onSubmit={crearOrden}>
        <h2>REGISTRO</h2>
        <div>
          <input
            type="text"
            placeholder="Nombre (Obligatorio)"
            name="nombre"
            value={formData.nombre}
            onChange={modificarInput}
            required=""
          />
          {errors.nombre && <p className="error-message">{errors.nombre}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Ubicacion (Obligatorio)"
            name="ubicacion"
            value={formData.ubicacion}
            onChange={modificarInput}
            required=""
          />
          {errors.ubicacion && <p className="error-message">{errors.ubicacion}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Telefono (Obligatorio)"
            name="telefono"
            value={formData.telefono}
            onChange={modificarInput}
            pattern="[0-9]*"
            maxLength={10}
            required=""
          />
          {errors.telefono && <p className="error-message">{errors.telefono}</p>}
        </div>

        {carrito.length > 0 ? (
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <h3>Resumen de compra:</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {carrito.map((item) => (
                <li key={item.id} style={{ margin: "10px 0" }}>
                  {item.nombre} - {item.cantidad} x ${Number(item.precio).toFixed(2)} = $
                  {(Number(item.cantidad) * Number(item.precio)).toFixed(2)}
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>Total: ${getTotalAmount().toFixed(2)}</p>
          </div>
        ) : (
          <p style={{ color: "red", marginTop: "20px" }}>
            No hay productos en el carrito. Agrega productos antes de realizar la compra.
          </p>
        )}

        <input
          type="submit"
          value="Finalizar Compra"
          disabled={carrito.length === 0}
          style={{
            opacity: carrito.length === 0 ? 0.5 : 1,
            cursor: carrito.length === 0 ? "not-allowed" : "pointer",
          }}
        />
      </form>
    </div>
  )
}

export default Checkout

