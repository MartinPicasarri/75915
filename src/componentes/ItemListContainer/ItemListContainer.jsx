import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { productos } from '../../productos';

function ItemListContainer() {

    const [items, setItems] = useState([]);
    const { nombre } = useParams();
  
    useEffect(() => {
      const productsCollection = collection(db, "productos");
      let consulta = productsCollection;

      if (nombre) {
        const productsCollectionFiltered = query(
          productsCollection,
          where("categoria", "==", nombre)
        );
        consulta = productsCollectionFiltered;
      }
  
      getDocs(consulta).then((res) => {
        const nuevoArray = res.docs.map((elemento) => {
          return { id: elemento.id, ...elemento.data() };
        });
        setItems(nuevoArray);
      });
    }, [nombre]);


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
                        items.map((el, index) => {
                            return (
                                <Item key={index} id={el.id} nombre={el.nombre} precio={el.precio} img={el.img} />
                            );
                        })
                }
            </div>
        </>
    );
};

export default ItemListContainer;