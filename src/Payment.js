import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct.js';
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "axios";

function Payment() {
    const [{ basket, user}, dispatch] = useStateValue();
    const history = useHistory();
    
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //Generate a special stripe secret which allows us to charge a customer 
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe sccepts the currencies in total subunits. Like 1 Rupees = 100 Paise
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    },[basket])

    const handleSubmit = async(event) => {
        //Do all the things realted to stripe
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card:elements.getElement(CardElement)
            }
        }).then(({ paymentIntent}) => {
            //PaymentIntent is basically the payment confirmation that is given to the user by the stripe
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            history.replace('/orders')
        })
    }

    const handleChange = event => {
        //Listen for changes in the card Element
        //And also display any error if the customer enters wrong card Details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    }

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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                            </div> 
                            {error && <div>{error}</div>}       
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
