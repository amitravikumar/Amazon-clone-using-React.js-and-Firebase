import React from 'react';
import './Product.css';

function Product (){
    return(
        <div className="product">
            <div className="product__info">
                <p>The Startup guide</p>
                <p className="product__price">
                    <small>Rs.</small>
                    <strong>325</strong>
                </p>
            </div>
        </div>
    )
}

export default Product;