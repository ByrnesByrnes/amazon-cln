import React from 'react';
import { StateContextConsumer } from '../context/state'
import { Subtotal, Checkout } from '../components';
import { SubtotalContainer } from '../container/subtotal';


export function CheckoutContainer() {
  return (
    <>
      <Checkout.Advert
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt="advertisement"
      />
      <Checkout>
        <Checkout.Left>
        <Checkout.Title>Shopping Cart</Checkout.Title>
          <Checkout.Price>Price</Checkout.Price>
          <hr />
          <StateContextConsumer>
            {([{ cart }]) => (
              cart.map((product, i) => (
                <>
                  <Checkout.Product key={i} product={product} />
                  <hr />
                </>
              ))
            )}
          </StateContextConsumer>
          <Subtotal.Calc style={{ "textAlign": "right" }}>SubTotal</Subtotal.Calc>
        </Checkout.Left>
        <Checkout.Right>
          <SubtotalContainer />
        </Checkout.Right>
      </Checkout>
    </>
  )
}