import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';
import "./CartWidget.css";
import { IoMdCart } from "react-icons/io";

function CartWidget() {

    const { carrito } = useAppContext();

    return (
        <Link to="/cart"> 
            <div className='icono'>
                <p><IoMdCart />()</p>
            </div>
        </Link>
    );
};

export default CartWidget;