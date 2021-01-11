import React from 'react';
import * as ROUTES from '../../constants/routes'
import { Product as P, Subtotal } from '../../components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  Container,
  Title,
  Advert,
  Left,
  Right,
  Price,
  Product,
  Link,

} from './styles/checkout'

export default function Checkout({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Checkout.Title = function CheckoutTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Checkout.Advert = function Checkout({ ...restProps }) {
  return <Advert {...restProps} />
}

Checkout.Left = function CheckoutLeft({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>
}

Checkout.Right = function CheckoutRight({ children, ...restProps }) {
  return <Right {...restProps}>{children}</Right>
}

Checkout.Price = function CheckoutPrice({ children, ...restProps }) {
  return (
    <Price {...restProps}>
      <span>{children}</span>
    </Price>
  )
}


Checkout.Product = function CheckoutProduct({ children, product, ...restProps }) {
  const { id, title, description, price, available } = product

  return (
    <Product>
      <div className="info">
        <div className="image">
          <img src="/imgs/pexels-luizmedeirosph.jpg" alt="" />
        </div>
        <div className="description">
          <Link to={`${ROUTES.PRODUCT}/${id}`}>
            <h1 className="title">{title}</h1>
          </Link>
          <div className="availability">
            {available ?
              <p className="stocked">In Stock</p> :
              <span>Currently unavailable.</span>
            }
          </div>
          <p>Sold by Eluktronics and Fulfilled By Amazon.ca.</p>
          <p>Eligible for FREE shipping</p>
          <Subtotal.Gift>This will be gift Learn more</Subtotal.Gift>
          <div className="action">
            <P.Button className="secondary">Qty: 1<ExpandMoreIcon /></P.Button>
            <P.Delete className="delete" id={id}>Delete</P.Delete>
            <P.Delete id={id}>Save for later</P.Delete>
          </div>
        </div>
      </div>
      <div className="price">
        <P.Price price={price}>$ {price}</P.Price>
      </div>
    </Product>
  )
}
