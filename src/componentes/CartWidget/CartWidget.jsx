import "./CartWidget.css";
import { IoMdCart } from "react-icons/io";

function CartWidget() {
    return (
        <div className="icono"> 
        <p><IoMdCart />(0)</p>
        </div>
    );
};

export default CartWidget;