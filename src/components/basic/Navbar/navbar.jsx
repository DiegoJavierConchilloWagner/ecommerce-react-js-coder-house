import React , {useEffect, useRef} from "react";
import { NavLink,Link } from "react-router-dom";
import Cart from "./Cart/CartWidget"
import "./navbar.css"


const Navbar = (scrollTop) => {
    // const addToCart = () => alert('Producto agregado al carrito.');


    //navbar animation 
    let refNav = useRef();
    const handleScroll = () => {
        const d = document;
        const w = window;
        // const scrollBtn = d.querySelector("nav");
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if (scrollTop > 40) {
            refNav.current.classList.add("scroll")
        }else if (scrollTop <= 40) {
            refNav.current.classList.remove("scroll")
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);
    
    return (
        <nav ref={refNav}>
            <input id="nav-toggle" type="checkbox" />
            <Link to="/"><div className="logo"><strong>PetHouse</strong></div></Link>
            <ul className="links">
                <li><NavLink exact to="/" activeClassName="active">Inicio</NavLink></li>
                <li><NavLink exact to="/productos" activeClassName="active">Productos</NavLink></li>
                <li><NavLink exact to="/preguntas" activeClassName="active">Preguntas</NavLink></li>
                <li><NavLink exact to="/nosotros" activeClassName="active">Nosotros</NavLink></li>
                <li><NavLink exact to="/contacto" activeClassName="active">Contacto</NavLink></li>
                <Cart />
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