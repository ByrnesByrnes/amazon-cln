import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { Product, Layout, Advert } from '../components'
import { BuyBoxContainer } from '../container/buyBox'
import { ProductContainer } from '../container/product'

import { products } from '../fakeProducts'
import { useParams } from 'react-router-dom'

export default function ProductPage() {
  const { id } = useParams()

  const product = products.find(item => item.id === parseInt(id) && item)

  if (!product) return <div>Product not found</div>

  return (
    <Layout>
      <Layout.Column>
        <Advert src={"/imgs/amazon-advert.png"} alt={"Amazon Advert"} />

        <Layout.Row>

          {/* add in image content this week hover/ such */}
          <Product.SideLeft>
            <Product.Image style={{ height: "100%" }} src={product.image} alt="something eventually" />
          </Product.SideLeft>

          <ProductContainer product={product} />
          <BuyBoxContainer product={product} />
        </Layout.Row>

        <hr />

      </Layout.Column>
    </Layout>
  )
}