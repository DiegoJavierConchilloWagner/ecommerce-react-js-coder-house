import React,{useRef,useContext} from "react";
import { CartContext } from "../../../../context/CartContext";
// import { CartContext } from '../../../context/CartContext';
import "../navbar.css"
import "./VisualCart.css"
import NavCart from "./NavCart";


const Cart = () => {
    const {cartNumber} = useContext(CartContext)

    let myCart = useRef()
    //  menu carrito desplegable
    const openNav = () => {
        if (window.screen.width < 500) {
            myCart.current.style.width = "350px";
        }
        else {
            myCart.current.style.width = "500px";
        }
    }
   
     ///////////////////////////////
    return (
        <>
            <li className="nav-item">
                <div className="carrito" onClick={openNav}>
                    <a href="#?" className="nav-link bolsa"><i className="fa fa-shopping-bag" /></a>
                    <span className="icon-carro-vacio" id="carroDeCompras" style={{color: 'black'}} />
                    <div className="cantidadDeProductos">
                        <span className="cantidadDeP" id="cantidadP">{cartNumber}</span>
                    </div>
                </div>
            </li>
            {/* seccion que se despliega de la derecha */}
            <NavCart myCart={myCart}/>
        </>
    )
};

export default Cart;