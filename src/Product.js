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
                <div className="product__rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt="An image was supposed to be here"/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product;