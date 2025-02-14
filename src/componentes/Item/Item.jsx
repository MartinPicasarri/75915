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
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    );
}

export default Item;