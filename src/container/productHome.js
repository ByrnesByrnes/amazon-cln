import React from 'react';
import {Link} from 'react-router-dom'
import * as ROUTES from '../constants/routes'

import { 
  Product,
  Rating 
} from '../components'

export function ProductHome({product}) {

  return (
    <Product>
    <Product.Info>
      <Product.Link to={`${ROUTES.PRODUCT}/${product.id}`}>
          <Product.Title>{product.title}</Product.Title>
      </Product.Link>
          <Product.Price>{product.price}</Product.Price>
          <Rating rating={product.rating}/>
    </Product.Info>
      <Product.Group>
        <Product.Image src={product.image} alt={product.title} />
        <Product.AddCart product={product}>Add to Cart</Product.AddCart>
      </Product.Group>
    </Product>
  )
}