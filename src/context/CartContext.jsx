import React,{createContext,useState,useEffect} from 'react'

export const CartContext = createContext()

export const CartPrivider = ({children}) => {
    //cart Items
    const [cart, setCart] = useState([])
    //Cart Number
    const [cartNumber, setCartNumber] = useState(cart.length);
    //Contador Items
    const [contador, setContador] = useState(1);
    ////////////////////////Funciones////////////////////////////////////////////
    //agregar productos
    const pushItems = (item) =>{
        setCart([...cart,item])
    }
    const handlePushItems = (id,cat,name,img,price,cantidad,contador) =>{
        pushItems({
            id,
            cat,
            name,
            img,
            price,
            cantidad,
            contador// stockElegido
        })
    }
    //remover productos
    const removeItems = (id) =>{
        setCart(cart.filter (prod => prod.id !== id))
    }
    //cartNumber
    useEffect(() => {
        setCartNumber(cart.length)
    }, [cart.length]);
    //CounterDetails
    const aumentar = () => contador < 15 && setContador(contador + 1) 
    const disminuir = () => contador > 1 && setContador(contador -1) 
    // const totalCarrito = () =>{
    //     return cart.reduce((acc, prod) => acc + (prod.precio * prod.cantidad),0)
    // }
    // const cantidadCarrito = () =>{
    //     return cart.reduce ((acc, prod) => acc + prod.cantidad,0)
    // }
    /////////////////////////////////////////////////////////////////////////////////////////
    //valores globales
    const data = {cart,pushItems,handlePushItems,cartNumber,removeItems,aumentar,disminuir,contador}
    console.log(cart)
    return (
        <>
            <CartContext.Provider value={data}>
                {children}
            </CartContext.Provider> 
        </>
    )
}

