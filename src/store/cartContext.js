import { createContext, useState } from "react";

export const cartContext = createContext(null);

function CartProvider({children}){
    
    const [cart, setCart] = useState([]);

    const values = {
        cart,
        setCart
    }
    return <cartContext.Provider value={values} >{children}</cartContext.Provider>

}

export default CartProvider
