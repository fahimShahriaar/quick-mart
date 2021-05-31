import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { name, img, price, seller, stock } = props.product;
    console.log(props);
    return (
        <div className="row mb-3 border-bottom pb-3">
            <div className="col-sm-12 col-md-6 col-lg-4">
                <img src={img} alt="" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8 px-5">
                <h6 style={{ color: '#1e6091' }} className="mb-5">{name}</h6>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock. order soon...</small></p>
                <button className="btn btn-info text-white btn-sm px-5">
                    <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                    add to cart
                </button>
            </div>

        </div>
    );
};

export default Product;