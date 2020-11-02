import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct.js';
import { Link } from 'react-router-dom'

function Payment() {
    const [{ basket, user}, dispatch] = useStateValue();
    
    return (
        <div className = "payment">
            <div className = "payment__container">
            <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
                {/*Delivery Address*/}
                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className = "payment__address">
                        <p>{user?.email} </p>
                        <p>React Road, Mumbai</p>
                        <p>Maharashtra</p>
                    </div>
                </div>
                {/* Product information */}
                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Review the Delivery items</h3>
                    </div>
                    <div className = "payment__items">
                    {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>

                </div>

                {/* Proceed to payment button with the product amount contents */}
                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Payment Details</h3>
                    </div>
                    <div className = "payment__details">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
