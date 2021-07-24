import React,{createContext,useState,useEffect} from 'react'

export const CartContext = createContext()

export const CartPrivider = ({children}) => {
    //cart Items
    const [cart, setCart] = useState([])
    //Cart Number
    const [cartNumber, setCartNumber] = useState(cart.length);
    //Contador Items
    // const [contador, setContador] = useState(1);
    
    //agregar productos
    const pushItems = (item) =>{
        setCart([...cart,item])
    }
    //remover productos
    const removeItems = (id) =>{
        setCart(cart.filter (prod => prod.id !== id))
    }
    //cartNumber
    useEffect(() => {
        setCartNumber(cart.length)
    }, [cart.length]);

    // const totalCarrito = () =>{
    //     return cart.reduce((acc, prod) => acc + (prod.precio * prod.cantidad),0)
    // }
    // const cantidadCarrito = () =>{
    //     return cart.reduce ((acc, prod) => acc + prod.cantidad,0)
    // }
    
    //valores globales
    const data = {cart,pushItems,cartNumber,removeItems}
    console.log(cart)
    return (
        <>
            <CartContext.Provider value={data}>
                {children}
            </CartContext.Provider> 
        </>
    )
}

