import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

function Navbar() {
    return (
        <header>
            <nav className="nav-bar">
                <p>LOGO</p>
                
                <ul className="navbar-list">
                    <li className="nav-bar-item">
                        <Link to="/">
                            PRODUCTOS
                        </Link>
                    </li>
                    <li className="nav-bar-item">
                        <Link to="/categoria/pizzas">
                            PIZZAS
                        </Link>
                    </li>
                    <li className="nav-bar-item">
                        <Link to="/categoria/empanadas">
                            EMPANADAS
                        </Link>
                    </li>
                </ul>
                
                <CartWidget />
            </nav>
        </header>
    );
};

export default Navbar;