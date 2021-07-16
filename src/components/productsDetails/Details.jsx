import React from 'react'

const Details = ({id,cat,name,img,price,cantidad,descripcion,longDesc}) => {
    return (
        <>
            <div className="columna-2">
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
                <p>Inicio / {cat} / {name}</p>
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
                <input className="inputDetalleProd" type="number" defaultValue={1} />
                <a href="carrito.html" className="boton">Agregar al carrito</a>
                <h3>Detalles del producto <i className="fa fa-indent" /></h3>
                <p>{longDesc} </p>
            </div>
        </>
    )
}

export default Details
