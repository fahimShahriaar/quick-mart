import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    console.log(products);
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-8 product-container p-5 border-end">

                    {
                        products.map(product => <Product product={product}></Product>)
                    }

                </div>
                <div className="col-sm-12 col-md-4 cart-container p-5 border-start">
                    <h3>This is cart</h3>
                </div>
            </div>

        </div>
    );
};

export default Shop;