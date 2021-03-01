import React, { useContext, useState, useEffect } from 'react';
import { shoppingCartContext } from '../../../contexts/ShoppingCartContext';
import './ShoppingCartProducts.css';
import cartDelete from '../../../assets/icons/cart-icons/trash-bin.svg';
import { Link } from 'react-router-dom';
import backIcon from '../../../assets/icons/details-icons/previous.svg';
import { toast, ToastContainer } from 'react-toastify';

const ShoppingCartProducts = () => {
    const { getCount } = useContext(shoppingCartContext);

    let carts = JSON.parse(localStorage.getItem('cartProducts'));
    const [cartsProducts, setcartsProducts] = useState(carts);

    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        let price = totalCount;
        cartsProducts?.map(item => {
            price += +item.price
        })

        setTotalCount(price);
        getCount(cartsProducts);
    }, [cartsProducts])

    const deleteCart = (itemId) => {
        carts = carts.filter(item => item.cartId !== itemId)
        localStorage.setItem('cartProducts', JSON.stringify(carts))
        setcartsProducts(carts);
        setTotalCount(0);
    }

    const clearCart = () => {
        localStorage.setItem('cartProducts', JSON.stringify([]))
    }

    const deletedFromCart = () => {
        toast.warning(`Deleted`, {
            position: toast.POSITION.TOP_CENTER
        })
    }

    return (
        <>
            {cartsProducts?.length !== 0 ?
                <div className="cart-main">
                    <div className="container-project">
                        <div className="cart__title">
                            <div>SHOPPING CART</div>
                        </div>
                        <div className="cart__inner">
                            {cartsProducts?.map(item => (
                                <div key={item.id} className="cart-inner-item">
                                    <div className="cart__start">
                                        <img src={item.image} width="100%" height="auto" />
                                    </div>
                                    <div className="cart-description__inner">
                                        <div className="cart-title">
                                            {item.title}
                                        </div>
                                        <div className="cart-year">
                                            YEAR: {item.year}
                                        </div>
                                        <div className="detail-all">
                                            SPEED: {item.speed}
                                        </div>
                                        <div className="detail-all">
                                            PRICE: {item.price} €
                            </div>
                                        <div className="cart-delete">
                                            <div className="cart-quantity">
                                            </div>
                                            <img
                                                onClick={() => {
                                                    deleteCart(item.cartId)
                                                    deletedFromCart()
                                                }}
                                                src={cartDelete} alt="" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="summary">
                        <div className="total-price">TOTAL: {totalCount} €</div>
                        <div className="cart-pay" onClick={() => clearCart()}><Link className="link-topay" to="/pay-form">Click To Pay</Link></div>
                        <div className="back-link">
                            <Link to="/products">
                                <img src={backIcon} className="back-icon" />   Back To Products
                </Link>
                        </div>
                    </div>
                </div>
                :
                <Link to="/products">
                    <div className="empty-cart"></div>
                </Link>
            }
            <ToastContainer autoClose={1500} />
        </>
    );
};

export default ShoppingCartProducts;