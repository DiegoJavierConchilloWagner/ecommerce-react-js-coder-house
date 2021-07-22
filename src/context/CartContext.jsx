import React,{ createContext ,useContext, useState} from 'react'

export const CartContext = createContext('')
export const useCartContext = () => useContext(CartContext)

export const CartPrivider = ({children}) => {
    const [cart, setCart] = useState([])
    const [cartNumber, setCartNumber] = useState(0);
    // const [contador, setContador] = useState(1);

    const pushItems = (item) =>{
        setCart([...cart,item])
        setCartNumber(cartNumber + 1) 
    }
    console.log(cart)
    return (
        <>
            <CartContext.Provider value={{cart,pushItems,cartNumber}}>
                {children}
            </CartContext.Provider> 
        </>
    )
}

