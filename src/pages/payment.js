import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { ProductCheckout } from '../container/productCheckout'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import {instance as axios} from '../axios/axios'
import { Subtotal } from '../components'
import { getCartSubtotal, getCartTotal } from '../reducer'


export default function Payment({ cart, dispatch }) {
  const stripe = useStripe()
  const elements = useElements()
  const history = useHistory()

  const [processing, setProcessing] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [succeeded, setSucceeded] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const [error, setError] = useState('')
 

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'POST',
        url: `/payments/create?total=${getCartTotal(getCartSubtotal(cart)) * 100}`
      })
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  },[cart])
  console.log('client Secret', clientSecret)

  const handleSubmit = async event => {
    event.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent}) => {
      // paymentIntent = payment confirmation
      setSucceeded(true)
      setError('')
      setProcessing(false)

      dispatch({
        type: 'EMPTY_CART',
        payload: []
      })
      
      history.replace(ROUTES.ORDERS)
    })
    // const payload = await stripe
  }
  const handleChange = event => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }


  return (
    <div className="payment">
      <div className="payment__container">
        <h1 className="payment__mainTitle">Checkout</h1>


        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__right">
            <p>reinier</p>
            <p>7321 Village Walk</p>
            <p>Mississauga, On</p>
            <p>L5W1X6</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items</h3>
          </div>
          <div className="payment__right">
           
            {cart.map((product, i) => (
              <ProductCheckout key={i} product={product} />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__right">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
              <Subtotal.Calc>Subtotal</Subtotal.Calc>
              Order Total: {getCartTotal(getCartSubtotal(cart))}
                <button
                  disabled={processing || disabled || succeeded}>
                  <span>{
                    processing ? <p>Processing</p> : "Buy Now"
                  }</span>

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