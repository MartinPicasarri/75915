import { Link } from 'react-router-dom';
import './Item.css';
import { useAppContext } from '../../context/context';

function Item({ id, nombre, precio, img }) {

    const { agregarAlCarrito } = useAppContext();

    return (
        <div className="card">
            <h2>{nombre || "NO DISPONIBLE"}</h2>
            <h3>Precio: ${precio || "SIN PRECIO"}</h3>
            <img src={img}  alt={nombre}/>
            <button disabled={!nombre} className="card-btn" onClick={() => agregarAlCarrito({id, nombre, precio, cantidad: 1})}>Agregar al carrito</button>
            <Link to={`/detalle/${id}`}>
                <button disabled={!nombre} className="card-bt">
                    Ver detalle
                </button>
            </Link>
        </div>
    );
};

export default Item;