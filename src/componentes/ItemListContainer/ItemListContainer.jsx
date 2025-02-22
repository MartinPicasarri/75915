import Item from "../Item/Item";
import { fetchData } from '../../fetchData';
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import "./ItemListContainer.css";

function ItemListContainer({greetings}) {

    const [todosLosProductos, setTodosLosProductos] = useState([]);
    const [misProductos, setMisProductos] = useState([]); 
    const [loading, setLoading] = useState(true);

    const usarFiltro = (filtro) => {
        switch (filtro) {
            case "Todos":
                setMisProductos(todosLosProductos);
                break;
            case "0-15000":
                setMisProductos(todosLosProductos.filter(el => el.precio < 15000))
                break;
            case "15000-30000":
                setMisProductos(todosLosProductos.filter(el => el.precio >= 15000))
                break;
            default:
                break;
        };
    };

    useEffect(() => {
        fetchData().then(response => {
            setTodosLosProductos(response);
            setMisProductos(response);
            setLoading(false);
        })
            .catch(err => console.error(err));
    }, []);


    return (
        <>
            <h1>{greetings}</h1>
           
            <div className="boton-filtro"> 
                <button onClick={() => usarFiltro("Todos")}>TODOS</button>
                <button onClick={() => usarFiltro("0-15000")}>0 - 15000</button>
                <button onClick={() => usarFiltro("15000-30000")}>15000 - +</button>
            </div>

            <div className="contenedor-cards">
            {
                    loading ? <Loader /> :
                        misProductos.map((el, index) => {
                            return (
                                <Item key={index} nombre={el.nombre} precio={el.precio} />
                            );
                        })
                }
            </div>
        </>
    );
};

export default ItemListContainer;
