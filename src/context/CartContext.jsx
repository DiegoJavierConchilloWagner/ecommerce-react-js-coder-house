import React,{ createContext ,useContext, useState} from 'react'

export const CartContext = createContext('')
export const useCartContext = () => useContext(CartContext)

export const CartPrivider = ({children}) => {
    const [cart, setCart] = useState([])
    const [cartNumber, setCartNumber] = useState(0);
    const [contador, setContador] = useState(1);

    const pushItems = (item) =>{
        setCart([...cart,item])
        setCartNumber(cartNumber + 1) 
    }
    // const aumentar = () => cantidad < 10 && setContador(contador + 1)como puedo hacer para realizarlo con cantidad? que seria la del stock del objeto
    const aumentar = () => contador < 10 && setContador(contador + 1) 
    const disminuir = () => contador > 1 && setContador(contador -1) 
    console.log(cart)
    return (
        <>
            <CartContext.Provider value={{cart,pushItems,cartNumber,aumentar,disminuir,contador}}>
                {children}
            </CartContext.Provider> 
        </>
    )
}

