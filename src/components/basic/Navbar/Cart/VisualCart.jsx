import React,{useContext} from 'react'
import { CartContext } from '../../../../context/CartContext'
const VisualCart = ( ) => {
    const { cart } = useContext(CartContext)

    return (
        <>
            <div className="carritoRender">
                <div className="grid-product-detalle">
                    <div className="detail detalle-producto">
                        <p>Detalle del Producto</p>
                    </div>
                    <div className="detail cantidad-producto">
                        <p>Cantidad</p>
                    </div>
                    <div className="detail precio-producto">
                        <p>Precio</p>
                    </div>
                </div>
                {/* fin seccion fija del carrito  */}
                {cart.length === 0 && (
                    <div className="noProducts">
                        <p>Ups! Aun no has agregado productos al carrito...</p>
                    </div>
                )}
                {/* articulos del carrito */}
                <div className="articulos" id="cart-container">

                </div>
                {/* suma del carrito */}
                <div className="suma" id="total">

                </div>
            </div>
            <button className="comprar">
                <i className="fa fa-shopping-bag" aria-hidden="true" />Comprar
            </button>
            <div className="compra">

            </div>
        </>
    )
}

export default VisualCart
