import React from 'react';
import {
  Container,
  Button,
  AddWish,
  Text,
  TextSmall,
  Price,
  Group,
  Bold,
  Link,
  Secure,
} from './styles/buyBox'

export default function BuyBox({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}

BuyBox.Button = function BuyBoxButton({children, text, ...restProps}) {
  return (
    <Button {...restProps}>
      {children}
      <span>{text}</span>
    </Button>
  )
}

BuyBox.AddWish = function BuyBoxAddWish({children,...restProps}) {
  return <AddWish {...restProps}>{children}</AddWish>
}


BuyBox.Text = function BuyBoxText({children,...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

BuyBox.TextSmall = function BuyBoxTextSmall({children,...restProps}) {
  return <TextSmall {...restProps}>{children}</TextSmall>
}

BuyBox.Price = function BuyBoxPrice({children, ...restProps}) {
  return <Price {...restProps}>{children}</Price>
}

BuyBox.Group = function BuyBoxGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}

BuyBox.Secure = function BuyBoxSecure({children, ...restProps}) {
  return <Secure {...restProps}>{children}</Secure>
}

BuyBox.Bold = function BuyBoxBold({children, ...restProps}) {
  return <Bold {...restProps}>{children}</Bold>
}

BuyBox.Link = function BuyBoxLink({children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}