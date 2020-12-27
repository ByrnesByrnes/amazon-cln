import React from 'react';
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom'
import { Product, Rating } from '../components'
import { products } from '../fakeProducts'

export default function Browse() {
  const product = products[3]
  return (
    <div>
      Browse
      <Product.Group>
        <Link to={`${ROUTES.PRODUCT}/${product.id}`}>
          <Product.Title>{product.title}-{product.description}</Product.Title>
        </Link>
        <Rating rating={product.rating} />
        <Product.Price>{product.price}</Product.Price>
      </Product.Group>

    </div>
  )
}
