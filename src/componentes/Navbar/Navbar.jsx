import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

function Navbar() {
    return (
        <header>
            <nav className="nav-bar">
                <CartWidget />
                <li>
                    <ul>INICIO</ul>
                    <ul>PRODUCTOS</ul>
                    <ul>EXTRAS</ul>
                    <ul>CARRITO</ul>
                </li>
            </nav>
        </header>
    );
};

export default Navbar;