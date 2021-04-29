import React from 'react';
import { StateContextConsumer } from '../../context/state'
import CurrencyFormat from 'react-currency-format'
import { getCartSubtotal } from '../../reducer'
import {
  Container,
  Button,
  Text,
  Calc,
  Gift,
} from './styles/subtotal'

export default function Subtotal({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Subtotal.Text = function SubtotalText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

Subtotal.Calc = function SubtotalCalc({children ,...restProps}) {
  return (
      <StateContextConsumer>
        {([{ cart }]) => (
          <Calc {...restProps}>
            <CurrencyFormat 
              renderText={value => (
                <p>{children} ({cart.length} item{cart.length !== 1 && "s"}):
                  <strong>CDN$ {value}</strong>
                </p>
              )}
            decimalScale={2}
            fixedDecimalScale={true}
            value={getCartSubtotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            
            />
          </Calc>
        )}
      </StateContextConsumer>
    )
}
Subtotal.Gift = function SubtotalGift({children, ...restProps}) {
  return (
      <Gift {...restProps}>
        <input type="checkbox" />
       {children}
      </Gift>
    )
}
// Subtotal (1 item): CDN$ 49.99
Subtotal.Button = function SubtotalButton({children, ...restProps}) {
  return <Button {...restProps}>{children}</Button>
}