import { Link } from 'react-router-dom';
import "./Item.css";

function Item ({nombre = "", descripcion = "", precio = 0}) {
    function agregarAlCarrito() {
        console.log("Se agrego " + nombre + " al carrito");
    }
    return (
        <div className="card">
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>${precio}</p>
            <button disabled={!nombre} className="card-btn" onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
            <Link to={`/detalle/${id}`}>
                <button disabled={!nombre} className="card-btn">
                    Ver detalle
                </button>
            </Link>
        </div>
    );
}

export default Item;