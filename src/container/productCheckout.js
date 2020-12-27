import React from 'react';
import { Product, Subtotal } from '../components'
import * as ROUTES from '../constants/routes'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export function ProductCheckout({ product }) {
  const { id, title, description, price, available } = product
  console.log(available)
  return (
    <>
      <Product className="checkout__product">
        <Product.Group className="checkout__info">
          <Product.Group>
            <Product.Image src="/imgs/pexels-luizmedeirosph.jpg" />
          </Product.Group>

          <Product.Group className="checkout__description">
            <Product.Link to={`${ROUTES.PRODUCT}/${id}`}>
              <Product.Title>{title}</Product.Title>
            </Product.Link>
            <Product.Group className="productPage__availability">
              {available ? 
                <Product.SmallText>In Stock</Product.SmallText>
               :<span>Currently unavailable.</span>
              }
            </Product.Group>
            <Product.SmallText>Sold by Eluktronics and Fulfilled By Amazon.ca.</Product.SmallText>
            <Product.SmallText>Eligible for FREE shipping</Product.SmallText>
            <Subtotal.Gift>This will be gift Learn more</Subtotal.Gift>
            <Product.Group className="checkout__action">
              <Product.Button className="secondary">Qty: 1<ExpandMoreIcon /></Product.Button>
              <Product.Delete id={id}>Delete</Product.Delete>
              <Product.Delete id={id}>Save for later</Product.Delete>
            </Product.Group>
          </Product.Group>

        </Product.Group>
        <Product.Group>
          <Product.Price>{price}</Product.Price>
        </Product.Group>
      </Product>
    </>
  )
}