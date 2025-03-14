import { Link, useParams } from "react-router-dom";
import "./ItemDetail.css";
import { useEffect, useState } from "react";
import { fetchData } from "../../fetchData";
import Loader from "../Loader/Loader";

function ItemDetail() {

    const { id } = useParams();

    const [detalle, setDetalle] = useState(null);

    function agregarAlCarrito() {
        console.log("Vas a agregar:", nombre);
    };

    useEffect(() => {
        fetchData().then(response => {
            const detalleDelProducto = response.find(el => el.id === parseInt(id));
            setDetalle(detalleDelProducto);
        })
            .catch(err => console.error(err));
    }, [id]);

    return (
        !detalle ? <Loader />
            :
            <div className="body-detail">
                <div className="card-detail">
                    <h2>{detalle.nombre}</h2>
                    <h3>Precio: ${detalle.precio}</h3>
                    <p>{detalle.descripcion}</p>
                    <button className="card-detail-btn" onClick={() => agregarAlCarrito()}>AGREGAR AL CARRITO</button>
                    <Link to="/">
                        <button className="card-detail-btn">VOLVER AL INICIO</button>
                    </Link>
                </div>
            </div>
    );
};

export default ItemDetail;