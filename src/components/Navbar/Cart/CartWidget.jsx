import React from "react";
import "../navbar.css"

const Cart = ({addToCart}) => {

    return (
        <div className="cart">
            <button onClick={addToCart}><i className="fas fa-shopping-cart"></i></button>
        </div>
    )
};

export default Cart;