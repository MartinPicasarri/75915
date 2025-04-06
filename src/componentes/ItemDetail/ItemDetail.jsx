import { Link, useParams } from 'react-router-dom';
import './ItemDetail.css';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../context/context';
import Contador from '../Contador/Contador';
import { db } from "../../firebaseConfig"
import { collection, getDoc, doc } from "firebase/firestore";

function ItemDetail() {

    const [item, setItem] = useState({});

    const { id } = useParams();
  
    useEffect(() => {
      const refCollection = collection(db, "productos");
      const refDoc = doc(refCollection, id);
      getDoc(refDoc).then((res) => {
        setItem({ id: res.id, ...res.data() });
      });
    }, [id]);

    const { agregarAlCarrito } = useAppContext();
    
    return (
            item ? 
            <div className="body-detail">
                <div className="card-detail">
                    <h2>{item.nombre || "NO DISPONIBLE"}</h2>
                    <h3>Precio: ${item.precio || "SIN PRECIO"}</h3>
                    <img src={item.img} alt={item.nombre} />
                    <p>{item.descripcion}</p>
                        <>
                            <Contador />
                        </>
                        
                    <button disabled={item.stock === 0} className="card-detail-btn" onClick={() => agregarAlCarrito({ id: item.id, nombre: item.nombre, precio: item.precio, cantidad: item.cantidad })}>Agregar al carrito</button>
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