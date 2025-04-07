import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

function Navbar() {
    return (
        <header>
            <nav className="nav-bar">
                <img src="https://res.cloudinary.com/dkymtbe7c/image/upload/v1743777201/mimuopis_sdi2gg.png" alt="" />
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