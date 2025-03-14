import { useEffect, useState } from "react";
import { fetchData } from "../../fetchData";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

function ItemListContainer() {

    const [todosLosProductos, setTodosLosProductos] = useState([]);
    const [misProductos, setMisProductos] = useState([]); 
    const [loading, setLoading] = useState(true);

    const { categoria } = useParams();

    useEffect(() => {
        if (todosLosProductos.length === 0) {
            fetchData().then(response => {
                setTodosLosProductos(response);
                if (categoria) {
                    const productosFiltrados = response.filter(el => el.categoria === categoria);
                    setMisProductos(productosFiltrados);
                    setLoading(false);
                } else {
                    setMisProductos(response);
                    setLoading(false);
                };
            })
                .catch(err => console.error(err));
        } else {
            if (categoria) {
                const productosFiltrados = todosLosProductos.filter(el => el.categoria === categoria);
                setMisProductos(productosFiltrados);
            } else {
                setMisProductos(todosLosProductos);
            };
        }

    }, [categoria]);

    return (
        <>
            <div className="contenedor-cards">
            {
                    loading ? <Loader /> :
                        misProductos.map((el, index) => {
                            return (
                                <Item key={index} id={el.id} nombre={el.nombre} precio={el.precio} />
                            );
                        })
                }
            </div>
        </>
    );
};

export default ItemListContainer;
