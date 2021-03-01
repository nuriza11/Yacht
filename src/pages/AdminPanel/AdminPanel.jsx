import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import './AdminPanel.css';
import ModalForEdtit from './ModalForEdtit/ModalForEdtit';
import { Link } from 'react-router-dom';
import ProductsPagination from '../../components/ProductsPagination/ProductsPagination';

const AdminPanel = () => {
    const {
        products,
        setProductData,
        getProductData,
        deleteProduct,
        editModalFormStatus,
        openEditFormModal,
        getEditId,
        count
    } = useContext(productsContext);

    const [item, setItem] = useState({
        title: '',
        year: '',
        price: '',
        image: '',
        speed: '',
        imageDetail: '',
        imageDetailExtra: '',
        detailLength: '',
        detailGuest: '',
        category: ''
    });

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

    const getInpValue = (e) => {
        const newProduct = {
            ...item,
            [e.target.name]: e.target.value
        }
        setItem(newProduct);
    }

    function addProduct() {
        if (!item.title || !item.year ||
            !item.price || !item.image ||
            !item.speed || !item.imageDetail ||
            !item.imageDetailExtra || !item.detailLength ||
            !item.detailGuest || !item.category)
            return alert('Все поля обязательны')
        setProductData(item);
        setItem({
            title: '',
            year: '',
            price: '',
            image: '',
            speed: '',
            imageDetail: '',
            imageDetailExtra: '',
            detailLength: '',
            detailGuest: '',
            category: ''
        });
    }

    return (
        <div className="admin-section">
            <div className="container">
                <div className="admin-product">
                    <div className="admin-product__title">
                        <span>Добавление товара</span>
                        <h5>Для главной страницы</h5>
                        <div className="admin-product__item">
                            <input type="text" className="admin-item-title"
                                value={item.title}
                                placeholder="Название яхты"
                                name="title"
                                onChange={getInpValue}
                            />
                            <input type="text" className="admin-item-year"
                                placeholder="Год выпуска"
                                value={item.year}
                                name="year"
                                onChange={getInpValue}
                            />
                            <input type="text" className="admin-item-price"
                                value={item.price}
                                placeholder="Цена"
                                name="price"
                                onChange={getInpValue}
                            />
                            <input type="text" className="admin-speed"
                                value={item.speed}
                                placeholder="Скорость"
                                name="speed"
                                onChange={getInpValue}
                            />
                            <input type="text" className="item-img"
                                value={item.image}
                                placeholder="Изображение"
                                name="image"
                                onChange={getInpValue}
                            />
                            <div className="admin-product__item-details">
                                <p>Для деталей</p>
                                <input type="text" className="img-detail"
                                    value={item.imageDetail}
                                    placeholder="Изображение для details"
                                    name="imageDetail"
                                    onChange={getInpValue}
                                />
                                <input type="text" className="img-detail-extra"
                                    value={item.imageDetailExtra}
                                    placeholder="Дополнительное изображение"
                                    name="imageDetailExtra"
                                    onChange={getInpValue}
                                />
                                <input type="text" className="admin-detail-length"
                                    value={item.detailLength}
                                    placeholder="Длина яхты"
                                    name="detailLength"
                                    onChange={getInpValue}
                                />
                                <input type="text" className="admin-detail-guest"
                                    value={item.detailGuest}
                                    placeholder="Кол-во гостевых кабин"
                                    name="detailGuest"
                                    onChange={getInpValue}
                                />
                                <select className="item-category"
                                    name="category"
                                    value={item.category}
                                    onChange={getInpValue}
                                >
                                    <option>---</option>
                                    <option value="Sport Yacht">Sport Yacht</option>
                                    <option value="Premium class">Premium Class</option>
                                    <option value="Econom class">Econom Class</option>
                                </select>
                            </div>
                            <div className="add-product__btn"
                                onClick={addProduct}
                            >Добавить
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-section-admin">
                <div className="container">
                    <div className="product-section__inner-admin">
                        {products.map(item => (
                            <div key={item.id} className="product-section__item">
                                <div className="item-image">
                                    <img src={item.image} alt="" width="100%" height="auto" />
                                </div>
                                <div className="item-description">
                                    <div className="item-title">{item.title}</div>
                                    <div className="item-year">Year: {item.year}</div>
                                    <div className="item-speed">Max speed: {item.speed}</div>
                                    <div className="item-price">{item.price} €</div>
                                    <Link to={`details/${item.id}`}><div className="item-details">More Info</div></Link>
                                </div>
                                <div className="item-end">
                                    <div
                                        onClick={() => {
                                            openEditFormModal()
                                            getEditId(item.id)
                                        }}
                                        className="item-cart"
                                    >Edit</div>
                                    <div
                                        onClick={() => deleteProduct(item.id)}
                                        className="item-wishlist"
                                    >Delete</div>
                                </div>
                                {editModalFormStatus ? <ModalForEdtit /> : null}
                            </div>
                        ))}
                    </div>
                </div>
                <ProductsPagination count={Math.ceil(count / 6)} page={page} onChange={onPaginationChange} />
            </div>
        </div>
    );
};

export default AdminPanel;