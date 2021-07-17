import React from 'react'
import { Link } from "react-router-dom";
import "./Items.css"
const Item = ({ id,cat,name,img,price,cantidad }) => {
    return (
        <div className={`columna-4 ${cat}`}>
            <div className="tarjetaPC">
                <div className="imgBxPc">
                    <img src={img} alt={name} />
                </div>
                <div className="contenidoBxPc">
                    <h2>{name}</h2>
                    <div className="ranking">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h2 className="precioPc">{price}</h2>
                    <Link to={`/productos-detalle?id=${id}`}><small>Ver Detalle</small></Link>
                    <a className="comprarPc" href="#?">Comprar!</a>
                </div>
            </div>
        </div>
    )
}

export default Item
