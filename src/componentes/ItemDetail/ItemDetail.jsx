import { Link, useParams } from "react-router-dom"
import "./ItemDetail.css"
import { useEffect, useState } from "react"
import { useAppContext } from "../../context/context"
import Contador from "../Contador/Contador"
import { db } from "../../firebaseConfig"
import { collection, getDoc, doc } from "firebase/firestore"

function ItemDetail() {
  const [item, setItem] = useState({})
  const { id } = useParams()
  const { agregarAlCarrito, contador } = useAppContext()

  useEffect(() => {
    const refCollection = collection(db, "productos")
    const refDoc = doc(refCollection, id)
    getDoc(refDoc).then((res) => {
      setItem({ id: res.id, ...res.data() })
    })
  }, [id])

  const stock = item.stock ? Number.parseInt(item.stock) : 12

  return item.id ? (
    <div className="body-detail">
      <div className="card-detail">
        <h2>{item.nombre || "NO DISPONIBLE"}</h2>
        <h3>Precio: ${item.precio || "SIN PRECIO"}</h3>
        <img src={item.img || "/placeholder.svg"} alt={item.nombre} />
        <p>{item.descripcion}</p>

        {/* Mostrar el contador siempre */}
        <div style={{ margin: "15px 0" }}>
          <Contador stock={stock} />
        </div>

        <button
          disabled={stock === 0}
          className="card-detail-btn"
          onClick={() =>
            agregarAlCarrito({
              id: item.id,
              nombre: item.nombre,
              precio: Number(item.precio), // Convertir a número
              cantidad: contador,
            })
          }
        >
          Agregar al carrito
        </button>
        <Link to="/">
          <button className="card-detail-btn">Volver al inicio</button>
        </Link>
      </div>
    </div>
  ) : (
    <p>Cargando producto...</p>
  )
}

export default ItemDetail

