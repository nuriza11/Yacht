import React, { useContext, useEffect, useReducer, useState } from 'react';
import { productsContext } from './ProductsContext';

export const shoppingCartContext = React.createContext();

const INIT_STATE = {
    cartArray: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_CART_ARRAY": return {
            ...state,
            cartArray: action.payload
        }
        default: return state;
    }
}

const ShoppingCartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const { cartProducts } = useContext(productsContext);

    const getCount = (array) => {
        dispatch({
            type: "GET_CART_ARRAY",
            payload: array
        })
    }
    

    useEffect(() => {
        if (!localStorage.getItem('cartProducts')) {
            localStorage.setItem('cartProducts', '[]');
        }
        if (cartProducts) {
            const cart = JSON.parse(localStorage.getItem('cartProducts'));
            cart.push({
                ...cartProducts,
                cartId:Date.now()})
            localStorage.setItem('cartProducts', JSON.stringify(cart))
        }
    }, [cartProducts])
    
    return (
        <shoppingCartContext.Provider value={{
            getCount,
            cartArray: state.cartArray
        }}>
            {children}
        </shoppingCartContext.Provider>
    )
}

export default ShoppingCartContextProvider;