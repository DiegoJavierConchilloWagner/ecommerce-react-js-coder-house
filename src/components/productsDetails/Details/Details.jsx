import React, {useContext} from 'react'
import ItemCount from '../../count/ItemCount'
import { CartContext } from '../../../context/CartContext'
import "./Details.css"

const Details = ({id,cat,name,img,price,cantidad,descripcion,longDesc}) => {
    const {removeItems,handlePushItems,contador} = useContext(CartContext)

    return (
        <>
            <div className="columna-2D">
                <img src={img} id="imgProducto" alt={name} />
                <div className="filaImgChica">
                    <div className="columnaImgChica">
                        <img src={img} alt={name} title={name} className="imgChica" />
                    </div>
                    <div className="columnaImgChica">
                        <img src={img} alt={name} title={name} className="imgChica" />
                    </div>
                    <div className="columnaImgChica">
                        <img src={img} alt={name} title={name} className="imgChica" />
                    </div>
                    <div className="columnaImgChica">
                        <img src={img} alt={name} title={name} className="imgChica" />
                    </div>
                </div>
            </div>
            <div className="columna-2M">
                <p className="columna-2MP">Inicio / {cat} / {name}</p>
                <h1>{name}</h1>
                <h2>${price}</h2>
                <select>
                    <option>Elegir sabor</option>
                    <option>Carne</option>
                    <option>Cordero</option>
                    <option>Mix</option>		
                    <option>Pollo</option>
                    <option>Pollo y arroz</option>
                </select>
                {/* <input className="inputDetalleProd" type="number" defaultValue={1} /> */}
                <ItemCount cantidad={cantidad} />
                <p className="removeItems--temp" onClick={()=> removeItems(id)}>eliminar</p>
                <a href="#?" className="boton" onClick={()=> handlePushItems(id,cat,name,img,price,cantidad,contador)}>Agregar al carrito</a>
                <h3>Detalles del producto <i className="fa fa-indent" /></h3>
                <p className="longDesc">{longDesc} </p>
            </div>
        </>
    )
}

export default Details
