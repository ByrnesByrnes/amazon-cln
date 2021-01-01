import React from 'react';
import { StateContext } from '../../context/state'


import {
  Container,
  Group,
  Browse,
  Info,
  Title,
  TitleSmall,
  Text,
  TextSmall,
  Image,
  Button,
  Price,
  Delete,
  ListItem,
  Link,
  Card 
} from './styles/product'



export default function Product({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Product.Group = function ProductGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}

Product.Info = function ProductInfo({children,...restProps}) {
  return <Info {...restProps}>{children}</Info>
}

Product.Title = function ProductTitle({children, ...restProps}) { 
  return <Title {...restProps}>{children}</Title>
}
Product.TitleSmall = function ProductTitleSmall({children, ...restProps}) { 
  return <TitleSmall {...restProps}>{children}</TitleSmall>
}

Product.Text = function ProductText({children,...restProps}) {
  return <Text {...restProps}>{children}</Text>
}
Product.TextSmall = function ProductTextSmall({children,...restProps}) {
  return <TextSmall {...restProps}>{children}</TextSmall>
}

Product.Image = function ProductImage({...restProps}) {
  return <Image {...restProps} />
}

Product.Button = function ProductButton({children, ...restProps}) {
  return <Button {...restProps}>{children}</Button>
}

Product.AddCart = function ProductAddCart({children, product, ...restProps}) {
  const [{}, dispatch] = StateContext()

  const addToCart = (event) => {
    event.preventDefault()

    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })
  }

  return <Button onClick={addToCart} {...restProps}>{children}</Button>
}

Product.Delete = function ProductDelete({ children, id,...restProps}) {
  const [state, dispatch] = StateContext()
  
  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id
    })
  }

  return <Delete onClick={removeFromCart} {...restProps}>{children}</Delete>
}

Product.Price = function ProductPrice({children, price, ...restProps}) {
  const getDecimal = price?.toString().split(".")[1]

  return <Price getDecimal={getDecimal} {...restProps}>{children}</Price>
}

Product.ListItem = function ProductListItem({children,...restProps}) {
  return <ListItem {...restProps}>{children}</ListItem>
}

Product.Link = function ProductLink({children,...restProps}) {
  return <Link {...restProps}>{children}</Link>
}

Product.Card = function ProductCard({children, ...restProps}) {
  return <Card {...restProps}>{children}</Card>
}

Product.Browse = function ProductBrowse({children, ...restProps}) {
  return <Browse {...restProps}>{children}</Browse>
}