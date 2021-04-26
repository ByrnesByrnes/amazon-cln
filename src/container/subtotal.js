import React from 'react';
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { Subtotal } from '../components'

export function SubtotalContainer() {
  return (
    <Subtotal>
      <Subtotal.Calc>SubTotal</Subtotal.Calc>
      <Subtotal.Gift>This order contains a gift</Subtotal.Gift>
      <Link to={`${ROUTES.PAYMENT}`}>
        <Subtotal.Button >Proceed to Checkout</Subtotal.Button>
      </Link>
    </Subtotal>
  )
}