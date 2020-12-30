import React from 'react';
import { StateContext } from '../../context/state'


import {
  Container,
  Group,
  Info,
  Title,
  Text,
  SmallText,
  Image,
  Button,
  Price,
  Delete,
  ListItem,
  Link,
  AddCart 
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

Product.Text = function ProductText({children,...restProps}) {
  return <Text {...restProps}>{children}</Text>
}
Product.SmallText = function ProductSmallText({children,...restProps}) {
  return <SmallText {...restProps}>{children}</SmallText>
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

Product.Price = function ProductPrice({children,...restProps}) {
  return (
    <Price {...restProps}>
      <strong>${children}</strong>
    </Price>
  )
}

Product.ListItem = function ProductListItem({children,...restProps}) {
  return <ListItem {...restProps}>{children}</ListItem>
}

Product.Link = function ProductLink({children,...restProps}) {
  return <Link {...restProps}>{children}</Link>
}