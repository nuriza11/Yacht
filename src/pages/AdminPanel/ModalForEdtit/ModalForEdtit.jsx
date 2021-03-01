import React, { useContext, useState, useEffect } from 'react';
import { productsContext } from '../../../contexts/ProductsContext';
import './ModalForEdtit.css';

const ModalForEdtit = () => {
    const { editProduct, editedProductData } = useContext(productsContext);
    const [editedProduct, setEditedProduct] = useState(editProduct);

    console.log(editedProduct)

    useEffect(() => {
        setEditedProduct(editProduct);
    }, [editProduct]);

    const getInpValue = (e) => {
        const newValue = {
            ...editedProduct,
            [e.target.name]: e.target.value
        }
        setEditedProduct(newValue);
    }
    
    const saveEdited = () => {
        if (!editedProduct.title || !editedProduct.year ||
            !editedProduct.price || !editedProduct.image ||
            !editedProduct.speed || !editedProduct.imageDetail ||
            !editedProduct.imageDetailExtra || !editedProduct.detailLength ||
            !editedProduct.detailGuest || !editedProduct.category)
            return alert('Все поля обязательны')
            editedProductData(editedProduct)
    }


    return (
        <div className="edit-modal">
            <div className="admin-product__edit">
                    <div className="admin-product__title">
                        <span>Редактирование товара</span>
                        <div className="admin-product__item-edit">
                            <span>Редактировать название</span>
                            <input type="text" className="admin-item-title"
                                value={editedProduct?.title || ''}
                                   name="title"
                                onChange={getInpValue}
                            />
                            <span>Редактировать год</span>
                            <input type="text" className="admin-item-year"
                                 value={editedProduct?.year || ''}
                                name="year"
                                onChange={getInpValue}
                            />
                             <span>Редактировать цену</span>
                            <input type="text" className="admin-item-price"
                                value={editedProduct?.price || ''}
                          name="price"
                                onChange={getInpValue}
                            />
                             <span>Новая ссылка на изображение</span>
                            <input type="text" className="item-img"
                                value={editedProduct?.image || ''}
                                 name="image"
                                onChange={getInpValue}
                            />
                             <span>Редактировать скорость</span>
                            <input type="text" className="admin-speed"
                                value={editedProduct?.speed || ''}
                              name="speed"
                                onChange={getInpValue}
                            />


                            <div className="admin-product__item-details">
                                <p>Для деталей</p>
                                <span>Новая ссылка на изображение</span>
                                <input type="text" className="img-detail"
                                    value={editedProduct?.imageDetail || ''}
                
                                       name="imageDetail"
                                    onChange={getInpValue}
                                />
                                <span>Редактировать длинну</span>
                                <input type="text" className="admin-detail-length"
                                    value={editedProduct?.detailLength || ''}
                                        name="detailLength"
                                    onChange={getInpValue}
                                />
                                <span>Редактировать поле гости</span>
                                <input type="text" className="admin-detail-guest"
                                    value={editedProduct?.detailGuest || ''}
                                        name="detailGuest"
                                    onChange={getInpValue}
                                    
                                />
                                <span>Изменить категорию</span>
                                 <select className="item-category"
                                    name="category"
                                    value={editedProduct?.category || ''}
                                    onChange={getInpValue}
                                >
                                    <option>---</option>
                                    <option value="Sport Yacht">Sport Yacht</option>
                                    <option value="Premium Class">Premium Class</option>
                                    <option value="Econom Class">Econom Class</option>
                                </select>
                            </div>
                            <div className="select-inputs">
                            </div>
                            <div className="add-product__btn"
                                onClick={saveEdited}
                            >Сохранить
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ModalForEdtit;