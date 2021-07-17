import React from 'react'
import "./Detalle.css"
import DetailsContainer from '../../components/productsDetails/DetailsContainer'


const Detalle = () => {
    return (
        <>
            {/*--------------------contenido---------------------------*/}
            <div className="contenedorChico productoUnico">
                <div className="filaD" id="res">
                    {/*-----------------Contenido-------------------*/}
                    <DetailsContainer />
                </div>
            </div>
            {/*-------------Titulo-----------*/}
            <div className="contenedorChico">
                <div className="filaD fila-2D">
                    <h2>Productos Relacionados</h2>
                    <a className="relatedProducts" href="productos.html">Ver Mas</a>
                </div>
            </div>
            {/*-----------------Productos-------------------*/}
            <div className="contenedorChico">
                <div className="filaM" id="productosRelacionados">
                    {/*-----------------Contenido-------------------*/}
                    <div className="columna-4">
          <img className="productoDetalleP" src="https://res.cloudinary.com/doejsqlbl/image/upload/v1626238332/producto_9_uofeyt.png" alt="Royal canin mini" title="Royal canin mini" />
          <h4>Royal Canin Mini</h4>
          <div className="ranking">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-half-o" />
          </div>
          <p>$4800</p>
        </div>
        <div className="columna-4">
          <img className="productoDetalleP" src="https://res.cloudinary.com/doejsqlbl/image/upload/v1626238332/producto_9_uofeyt.png" alt="Royal Canin Puppy" title="Royal Canin Puppy" />
          <h4>Royal Canin Puppy</h4>
          <div className="ranking">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-o" />
          </div>
          <p>$3900</p>
        </div>
        <div className="columna-4">
          <img className="productoDetalleP" src="https://res.cloudinary.com/doejsqlbl/image/upload/v1626238332/producto_9_uofeyt.png" alt="Sieger Puppy" title="Sieger Puppy" />
          <h4>Sieger Puppy</h4>
          <div className="ranking">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-half-o" />
          </div>
          <p>$4600</p>
        </div>
        <div className="columna-4">
          <img className="productoDetalleP" src="https://res.cloudinary.com/doejsqlbl/image/upload/v1626238332/producto_9_uofeyt.png" alt="Sieger Criadores" title="Sieger Criadores" />
          <h4>Sieger Criadores</h4>
          <div className="ranking">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-o" />
          </div>
          <p>$5800</p>
        </div>
                </div>
            </div>
        </>
    )
}

export default Detalle
