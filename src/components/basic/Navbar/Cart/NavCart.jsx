import React from 'react'
import VisualCart from './VisualCart';

const NavCart = ({myCart}) => {
    const closeNav = () => {
        myCart.current.style.width = "0";
    }
    return (
        <>
            <section className="carrito">
                <div ref={myCart} className="visualCart">
                    <a href="#?" className="closebtn" onClick={closeNav}>×</a>
                    <VisualCart />
                </div>
            </section>
        </>
    )
}

export default NavCart
