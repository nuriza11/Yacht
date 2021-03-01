import React, { useContext, useEffect, useState } from 'react';
import './ProductsSection.css';
import { productsContext } from '../../contexts/ProductsContext';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import ProductsPagination from '../../components/ProductsPagination/ProductsPagination';
import { TextField } from '@material-ui/core';
import Like from '../../components/Like/Like';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import backIcon from '../../assets/icons/details-icons/previous.svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductsSection = () => {
    const {
        products,
        getProductData,
        getProductForCart,
        getProductForWishList,
        count
    } = useContext(productsContext);

    const [page, setPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const [filter, setFilter] = useState("");

    useEffect(() => {
        if (filter) {
            getProductData(`http://localhost:8000/products?_limit=6&_page=${page}&q=${searchValue}&category=${filter}`);
        } else {
            getProductData(`http://localhost:8000/products?_limit=6&_page=${page}&q=${searchValue}`);
        }
    }, [page, searchValue, filter]);

    const onPaginationChange = (e, value) => {
        setPage(value)
    }

    const productAddedToCart = () => {
        toast.success(`Added To Cart`, {
            position: toast.POSITION.TOP_CENTER
        })
    }

    const productAddedToWish = () => {
        toast.info(`Added To WishList`, {
            position: toast.POSITION.TOP_CENTER
        })
    }

    return (
        <div className="product-section">
            <div className="container-project">
                <div className="search-input">
                    <TextField
                        fullWidth={true}
                        variant={'outlined'}
                        style={{
                            maxWidth: '60%',
                            marginTop: '30px', display: 'block'
                        }}
                        placeholder="Search"
                        value={searchValue}
                        onChange={(e) => {
                            e.preventDefault();
                            setSearchValue(e.target.value)
                        }}
                    />
                    <select className="item-filter"
                        name="category"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="">---</option>
                        <option value="Sport Yacht">Sport Yacht</option>
                        <option value="Premium class">Premium Class</option>
                        <option value="Econom class">Econom Class</option>
                    </select>
                </div>
                <div className="product-section__inner">
                    {products.map(item => (
                        <Flip right key={item.id}>
                            <div className="product-section__item">
                                <div className="item-image">
                                    <img src={item.image} alt="" width="100%" height="auto" />
                                </div>
                                <div className="item-description">
                                    <div className="item-title">{item.title}</div>
                                    <div className="item-year">Year: {item.year}</div>
                                    <div className="item-speed">Max speed: {item.speed} knots</div>
                                    <div className="item-price">{item.price} €</div>
                                    <div className="item-details"><Link to={`details/${item.id}`}>More Info</Link></div>
                                </div>
                                <div className="item-end">
                                    <div
                                        onClick={() => {
                                            getProductForCart(item.id)
                                            productAddedToCart()
                                        }}
                                        className="item-cart"><AddShoppingCartIcon />
                                    </div>
                                    <div
                                        onClick={() => {
                                            getProductForWishList(item.id)
                                            productAddedToWish()
                                        }}
                                        className="item-wishlist"
                                    >Wishlist
                                    </div>
                                    <Like />
                                </div>
                            </div>
                        </Flip>
                    ))}
                </div>
            </div>
            <ProductsPagination count={Math.ceil(count / 6)} page={page} onChange={onPaginationChange} />
            <div className="back-link">
                <Link to="/">
                    <img src={backIcon} className="back-icon" />   MAIN PAGE
                </Link>
            </div>
            <ToastContainer autoClose={1500} />
        </div>
    );
};

export default ProductsSection;