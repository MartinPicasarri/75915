import { useEffect, useState } from 'react';
import { fetchData } from '../../fetchData';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { productos } from '../../productos';

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

    /*const cargarMuchosProductos = () => {
        const refCollection = collection(db, 'productos');

        productos.forEach( (elemento) => {
            addDoc(refCollection, elemento);
        });
    };*/

    return (
        <>
            {/*<button onClick={cargarMuchosProductos}>Cargar muchos productos</button> */}

            <div className="container-cards">
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