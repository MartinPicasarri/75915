import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

function Navbar() {
    return (
        <header>
            <nav className="nav-bar">
                
                <CartWidget />
            </nav>
        </header>
    );
};

export default Navbar;