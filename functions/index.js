const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HiwwjAOPPWXInSK6qSzyZweKA0UCrFTB0lIPjpdB42F0DERwud59a2DeK2ZtNraVKZcbEwIVNe1yuidF4tD2wqD00MXXE8WKs"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example end point for the requests
//http://localhost:5001/clone-e486a/us-central1/api

//sk_test_51HiwwjAOPPWXInSK6qSzyZweKA0UCrFTB0lIPjpdB42F0DERwud59a2DeK2ZtNraVKZcbEwIVNe1yuidF4tD2wqD00MXXE8WKs