import React , {useEffect} from "react";
import Cart from "./Cart/CartWidget"
import "./navbar.css"


const Navbar = (scrollTop) => {
    const addToCart = () => alert('Producto agregado al carrito.');
    //navbar animation 
    const handleScroll = () => {
        const d = document;
        const w = window;
        const scrollBtn = d.querySelector("nav");
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if (scrollTop > 40) {
            scrollBtn.classList.add("scroll")
        }else if (scrollTop <= 40) {
            scrollBtn.classList.remove("scroll")
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);
    
    return (
        <nav>
            <input id="nav-toggle" type="checkbox" />
            <div className="logo"><strong>PetHouse</strong></div>
            <ul className="links">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Productos</a></li>
                <li><a href="#work">Preguntas</a></li>
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