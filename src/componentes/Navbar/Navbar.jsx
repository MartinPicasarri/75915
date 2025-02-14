import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

function Navbar() {
    return (
        <header>
            <nav className="nav-bar">
                <p>LOGO</p>
                
                <ul className="navbar-list">
                    <li>INICIO</li>
                    <li>PRODUCTOS</li>
                    <li>CONTACTO</li>
                </ul>
                
                <CartWidget />
            </nav>
        </header>
    );
};

export default Navbar;