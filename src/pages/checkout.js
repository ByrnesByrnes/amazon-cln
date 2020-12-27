import React from 'react';
import { StateContextConsumer } from '../context/state'
import { Subtotal } from '../components';
import { ProductCheckout } from '../container/productCheckout';
import { SubtotalContainer } from '../container/subtotal';

export default function Checkout() {
  return (
    <>
      <img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt="advertisement"
      />
      <div className="checkout">
        <div className="checkout__left">
          <h1 checkout__title>Shopping Cart</h1>
          <div className="checkout__price">
            <span>Price</span>
          </div>
          <hr />
          <StateContextConsumer>
            {([{ cart }]) => (
              <>
                {cart.map((product, i) => (
                  <>
                    <ProductCheckout key={i} product={product} />
                    <hr />
                  </>
                ))}
              </>
            )}
          </StateContextConsumer>
          <Subtotal.Calc style={{ "textAlign": "right" }} />
        </div>
        <div className="checkout__right">
          <SubtotalContainer />
        </div>
      </div>

    </>
  )
}