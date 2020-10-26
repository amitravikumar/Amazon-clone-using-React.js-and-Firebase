import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct = ({ id, image, title, price, rating}) => {
    return( <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />
        </div>
    )
}

export default CheckoutProduct;