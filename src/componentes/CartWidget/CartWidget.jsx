import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import "./CartWidget.css";
import { IoMdCart } from "react-icons/io";

function CartWidget() {

    const { carrito } = useAppContext();

    return (
        <Link to="/cart"> 
            <p><IoMdCart />(0)</p>
        </Link>
    );
};

export default CartWidget;