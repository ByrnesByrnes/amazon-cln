import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { Rating, Product } from '../components'
import { products } from '../fakeProducts'
import { useParams } from 'react-router-dom'

export default function ProductPage() {
  const { id } = useParams()

  const product = products.find(item => item.id === parseInt(id) && item)

  if (!product) return <div>Product not found</div>
  return (
    <div key={id} className="productPage__container">
      <img className="productPage__advert" src="/imgs/amazon-advert.png" alt="amazon-advert" />
      <div className="productPage">
        <div className="productPage__left">
          <img className="productPage__image" src={product.image} alt="" />
        </div>
        <div className="productPage__right">
          <div>
            <Product.Title>
              {product.title} - {product.description}
            </Product.Title>
          </div>
          <div>
            <Link className="productPage__brand" to={`${ROUTES.PRODUCT}/${product.id}`}>Brand: {product.brand}</Link>
          </div>
          <div className="productPage__rating">
            <Rating rating={product.rating} />
            <ExpandMoreIcon />
            <span className="productPage__ratings">{product.rating} ratings</span>
          </div>
          <hr />
          {
            !product.available &&
            <div className="productPage__availability">
              <span>Currently unavailable.</span>
              <br />
            We don't know when or if this item will be back in stock.
          </div>
          }
          {product.specifications &&
            <div>
              <table className="productPage__specifications">
                {product.specifications.map(specs => (
                  <tbody>
                    {Object.entries(specs).map(([key, value], i) => (
                      <tr key={i} className="productPage__tr">
                        <td className="productPage__td">{key}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>}
          <div>
            <hr />
            <h1 className="productPage__about">About this item</h1>
            <ul>
              {product.about && product.about.map((item, i) => (
                <Product.ListItem key={i}>{item}</Product.ListItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}