import Item from "../Item/Item";
import "./ItemListContainer.css";

function ItemListContainer({greetings}) {
    return (
        <>
            <h1>{greetings}</h1>
            <div className="contenedor-cards">
                <Item nombre={"Producto 1"} descripcion={"Descripción"} precio={1000} />
                <Item nombre={"Producto 2"} descripcion={"Descripción"} precio={2000} />
                <Item nombre={"Producto 3"} descripcion={"Descripción"} precio={3000} />
                <Item nombre={"Producto 4"} descripcion={"Descripción"} precio={4000} />
                <Item nombre={"Producto 5"} descripcion={"Descripción"} precio={5000} />        
            </div>
        </>
    );
};

export default ItemListContainer;
