import React,{ createContext ,useContext, useState} from 'react'

export const CartContext = createContext('')
export const useCartContext = () => useContext(CartContext)

export const ListPrivider = ({children, initial}) => {
    const [count, setCount] = useState({initial})
    return (
        <>
            <CartContext.Provider value={{count, setCount}}>
                {children}
            </CartContext.Provider> 
        </>
    )
}

