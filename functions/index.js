const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')('sk_test_Xz8WsLPeampX3F7IS3rJISgV')

const app = express()

app.use(cors({ 
  origin: true
}))
app.use(express.json())

app.post('/payments/create', async (request, response) => {
  const total = request.query.total
  // console.log('Payment to Stripe: ', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'cad'
  })
  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  })
})

exports.api = functions.https.onRequest(app)
