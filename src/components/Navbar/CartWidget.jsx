import React from "react";
import "./navbar.css"

const Cart = (props) => {

    return (
        <div className="cart">
            <button onClick={props.addToCart}><i className="fas fa-shopping-cart"></i></button>
        </div>
    )
};

export default Cart;