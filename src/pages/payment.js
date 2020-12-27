import React from 'react';
import { ProductCheckout } from '../container/productCheckout'

export default function Payment({cart, dispatch}) {
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
            {/* add cart here */}
            {cart.map((product, i) => (
              <ProductCheckout product={product} />
            ))}

      
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__right">
     

          </div>
        </div>
      </div>
    </div>
  )
}