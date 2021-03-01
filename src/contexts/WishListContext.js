import React, { useContext, useEffect } from 'react';
import { productsContext } from './ProductsContext';

export const wishListContext = React.createContext();


const WishListContextProvider = ({ children }) => {
    const { wishListProducts } = useContext(productsContext);

    useEffect(() => {
        if (!localStorage.getItem('wishListProducts')) {
            localStorage.setItem('wishListProducts', '[]');
        }
        if (wishListProducts) {
            const cart = JSON.parse(localStorage.getItem('wishListProducts'));
            cart.push({
                ...wishListProducts,
                cartId:Date.now()})
            localStorage.setItem('wishListProducts', JSON.stringify(cart))
        }
    }, [wishListProducts])
    
    return (
        <wishListContext.Provider value={{

        }}>
            {children}
        </wishListContext.Provider>
    )
}

export default WishListContextProvider;