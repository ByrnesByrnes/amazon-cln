import React from 'react';
import { BuyBox, Product, Subtotal } from '../components'
import LockIcon from '@material-ui/icons/Lock';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export function BuyBoxContainer({ product }) {
  return product.available ? (
    <BuyBox>
      <BuyBox.Price>CDN$ {product.price}</BuyBox.Price>
      <BuyBox.TextSmall>&
          <BuyBox.Bold> FREE Shipping. </BuyBox.Bold>
        <BuyBox.Link to="#">Details</BuyBox.Link>
      </BuyBox.TextSmall>
      <BuyBox.TextSmall>Arrives:
          <BuyBox.Bold> Monday, Jan 18 </BuyBox.Bold>
        <BuyBox.Link to="#">Details</BuyBox.Link>
      </BuyBox.TextSmall>
      <BuyBox.Text>
        Only 6 left in stock.
        </BuyBox.Text>
      <Product.AddCart product={product} style={{ width: "100%" }}>Add to Cart</Product.AddCart>
      {/* add to Cart and Direct to checkout */}
      <BuyBox.Button text={'Buy Now'}><PlayArrowIcon /></BuyBox.Button>

      <BuyBox.Secure>
        <BuyBox.Link to="#">
          <BuyBox.TextSmall><LockIcon /> Secure transaction</BuyBox.TextSmall>
        </BuyBox.Link>
      </BuyBox.Secure>

      <BuyBox.TextSmall>Ships from and sold by Amazon.ca</BuyBox.TextSmall>
      <BuyBox.Group>
        {/* create custom component for check in BuyBox */}
        <Subtotal.Gift style={{ display: "block" }}>Try<BuyBox.Link to="#"> Amazon Prime </BuyBox.Link>
          and start saving today with
          <BuyBox.Bold> fast, free delivery on millions of items</BuyBox.Bold>
        </Subtotal.Gift>
      </BuyBox.Group>
      <Subtotal.Gift> Buy this item as a gift</Subtotal.Gift>
      <BuyBox.AddWish>Add to Wish List</BuyBox.AddWish>
    </BuyBox>
  ) : (
      <BuyBox>
        <BuyBox.TextSmall style={{ textAlign: "center" }}>
          <BuyBox.Bold style={{ color: "#B12704" }}>Currently unavailable.</BuyBox.Bold>
          <br />
          We don't know when or if this item will be back in stock.
        </BuyBox.TextSmall>
        <BuyBox.AddWish>Add to Wish List</BuyBox.AddWish>
      </BuyBox>
    )
}