import React from 'react';
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Product, Rating } from '../components'


export function ProductContainer({ product }) {
  return (
    <Product.Center>
      <div>
        <Product.Title>
          {product.title} - {product.description}
        </Product.Title>
      </div>
      <div>
        <Link to={`${ROUTES.PRODUCT}/${product.id}`}>
          <Product.Brand>Brand: {product.brand}</Product.Brand>
        </Link>
      </div>
      <Product.Rating>
        <Rating rating={product.rating} />
        <ExpandMoreIcon />
        <span className="productPage__ratings">{product.rating} ratings</span>
      </Product.Rating>
      <hr />

      <Product.Available product={product} />
      {/* remove && operator when Product finished */}
      {product.specifications && <Product.Specifications product={product} />}
      <div>
        <hr />
        <h1 className="productPage__about">About this item</h1>
        <ul>
          {product.about && product.about.map((item, i) => (
            <Product.ListItem key={i}>{item}</Product.ListItem>
          ))}
        </ul>
      </div>
    </Product.Center>
  )
}