import React from 'react';
import {Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { StateContext } from '../context/state'

import { 
  Product,
  Rating 
} from '../components'

export function ProductHome({product}) {
  const [state, dispatch] = StateContext()
  const {id, title, price, rating, image,} = product

  const addToCart = (event) => {
    event.preventDefault()

    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })
  }

  return (
    <Product>
    <Product.Link to={`${ROUTES.PRODUCT}/${id}`}>
        <Product.Title>{title}</Product.Title>
    </Product.Link>
        <Product.Price>{price}</Product.Price>
        <Rating rating={rating}/>
      <Product.Group>
        <Product.Image src={image} alt={title} />
        <Product.Button onClick={addToCart}>Add to Cart</Product.Button>
      </Product.Group>
    </Product>
  )
}