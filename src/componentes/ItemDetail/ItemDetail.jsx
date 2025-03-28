import { Link, useParams } from 'react-router-dom';
import './ItemDetail.css';
import { useEffect, useState } from 'react';
import { fetchData } from '../../fetchData';
import Loader from '../Loader/Loader';
import { useAppContext } from '../../context/context';
import Contador from '../Contador/Contador';

function ItemDetail() {

    const { id } = useParams();

    const [detalle, setDetalle] = useState(null);
    const [loader, setLoader] = useState(true);

    const { agregarAlCarrito, contador } = useAppContext();

    useEffect(() => {
        fetchData().then(response => {
            const detalleDelProducto = response.find(el => el.id === parseInt(id));
            setDetalle(detalleDelProducto);
            setLoader(false);
        })
            .catch(err => console.error(err));
    }, [id]);

    return (
        loader ? <Loader />
            :
            detalle ? 
            <div className="body-detail">
            <div className="card-detail">
                <h2>{detalle.nombre || "NO DISPONIBLE"}</h2>
                <h3>Precio: ${detalle.precio || "SIN PRECIO"}</h3>
                <p>{detalle.descripcion}</p>
                    <>
                        <Contador />
                    </>
                       
                <button disabled={detalle.stock === 0} className="card-detail-btn" onClick={() => agregarAlCarrito({ id: detalle.id, nombre: detalle.nombre, precio: detalle.precio, cantidad: contador })}>Agregar al carrito</button>
                <Link to="/">
                    <button className="card-detail-btn">Volver al inicio</button>
                </Link>
            </div>
        </div>
            :
            <p>Producto no encontrado con el id {id}</p>
    );
};

export default ItemDetail;