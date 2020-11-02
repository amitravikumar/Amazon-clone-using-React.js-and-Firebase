const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HiwwjAOPPWXInSK6qSzyZweKA0UCrFTB0lIPjpdB42F0DERwud59a2DeK2ZtNraVKZcbEwIVNe1yuidF4tD2wqD00MXXE8WKs');


//API


//App Config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API Modules
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", (request, response) => {
    const total = request.query.total;

    console.log("payment has been received for this ammount -->>>>0, total")

    const paymentIntent = await stripe.paymentIntent.create({
        ammount:total,
        currency: "inr",
    })
})

//Listen Command
exports.api = functions.https.onRequest(app);


//Example end point for the requests
//http://localhost:5001/clone-e486a/us-central1/api