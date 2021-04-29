import React from 'react';
import moment from 'moment'
import * as ROUTES from '../constants/routes'
import RepeatIcon from '@material-ui/icons/Repeat';
import { Order, Product } from '../components'

export function OrderContainer({ order }) {

  return (
    <Order.Frame key={order.data.created}>
      <Order.Info>
        <Order.Info>
          <Order.Label>
            <Order.Text>ORDER PLACED</Order.Text>
            <Order.Text>{moment.unix(order.data.created).format('MMMM D YYYY')}</Order.Text>
          </Order.Label>
          <Order.Label>
            <Order.Text>TOTAL</Order.Text>
            <Order.Text>CDN$ {order.data.amount / 100}</Order.Text>
          </Order.Label>
          <Order.Label>
            <Order.Text>SHIP TO</Order.Text>
            <Order.Link to="#">
              <Order.Text>Myron R Byrnes</Order.Text>
            </Order.Link>
          </Order.Label>
        </Order.Info>
        <Order.Label>
          <Order.Text>Order # {Date.now()}</Order.Text>
          <Order.Row>
            <Order.Link to="#">
              <Order.Text>Order Details </Order.Text>
            </Order.Link>
            <Order.Link to="#">
              <Order.Text>Invoice</Order.Text>
            </Order.Link>
          </Order.Row>
        </Order.Label>
      </Order.Info>
      {/* Body with Product */}
      <Order.Group>
        <Order.Group>
          <Order.Subtitle>Delivered Oct 9, 2020</Order.Subtitle>
        </Order.Group>

        {/* PRODUCT SECTION */}
        {order.data.cart.map((product, i) => (
          <Order.Row key={i}>
            <Order.Item>
              <Order.Row>
                <Order.Group>
                  <Product.Image src={product.image} />
                </Order.Group>
                <Product.Group>
                  <Order.Link to={`${ROUTES.PRODUCT}/${product.id}`}>
                    <Product.Text>{product.title} - {product.description}</Product.Text>
                  </Order.Link>
                  <Product.Text>
                    Sold by: <Order.Link to="#">{product.brand}</Order.Link>
                  </Product.Text>
                  <Order.Text>Return eligible through Jan 31, 2021</Order.Text>
                  <Order.Price>CDN$ {product.price}</Order.Price>
                  <Product.AddCart product={product} ><RepeatIcon />Buy it Again</Product.AddCart>
                </Product.Group>
              </Order.Row>
            </Order.Item>

            {/* Buttons section */}
            <Order.Group>
              <Order.Button>Get product support</Order.Button>
              <Order.Button className="secondary">Return items</Order.Button>
              <Order.Button className="secondary">Share gift receipt</Order.Button>
              <Order.Button className="secondary">Leave seller feedback</Order.Button>
              <Order.Button className="secondary">Write a product review</Order.Button>
              <Order.Button className="secondary">Archive order</Order.Button>
            </Order.Group>
          </Order.Row>      
        ))}
      </Order.Group>

    </Order.Frame>
  )
}