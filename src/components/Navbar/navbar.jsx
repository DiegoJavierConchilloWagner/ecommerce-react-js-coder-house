import React from "react";
import Cart from "./CartWidget"
import "./navbar.css"


const Navbar = (props) => {
    const addToCart = () => alert('Producto agregado al carrito.')
    return (
        <nav>
            <input id="nav-toggle" type="checkbox" />
            <div className="logo"><strong>PetHouse</strong></div>
            <ul className="links">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Productos</a></li>
                <li><a href="#work">Preguntas frecuentes</a></li>
                <li><a href="#projects">Nosotros</a></li>
                <li><a href="#contact">Contacto</a></li>
                <Cart addToCart={addToCart}/>
            </ul>
            <label htmlFor="nav-toggle" className="icon-burger">
                <div className="line" />
                <div className="line" />
                <div className="line" />
            </label>
        </nav>
    )
};

export default Navbar;