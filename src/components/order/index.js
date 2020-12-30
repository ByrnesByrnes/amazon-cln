import React from 'react'
import { 
  Container,
  Title,
  Subtitle,
  Button,
  Info,
  Label,
  Frame,
  Group,
  Link,
  Item,
  Text,
  Row,
  Price,

} from './styles/order'

export default function Order({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Order.Title = function OrderTitle({children,...restProps}){
  return <Title {...restProps}>{children}</Title>
}

Order.Subtitle = function OrderSubtitle({children, ...restProps}) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}
Order.Text = function OrderText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}
Order.Info = function OrderInfo({children, ...restProps}) {
  return <Info {...restProps}>{children}</Info>
}
Order.Label = function OrderLabel({children, ...restProps}) {
  return <Label {...restProps}>{children}</Label>
}

Order.Button = function OrderButton({children, ...restProps}) {
  return <Button {...restProps}>{children}</Button>
}

Order.Frame = function OrderFrame({children,...restProps}) {
  return <Frame {...restProps}>{children}</Frame>
}
Order.Group = function OrderGroup({children,...restProps}) {
  return <Group {...restProps}>{children}</Group>
}
Order.Link = function OrderLink({children,...restProps}) {
  return <Link {...restProps}>{children}</Link>
}
Order.Item = function OrderItem({children,...restProps}) {
  return <Item {...restProps}>{children}</Item>
}
Order.Row = function OrderRow({children,...restProps}) {
  return <Row {...restProps}>{children}</Row>
}
Order.Price = function OrderPrice({children,...restProps}) {
  return <Price {...restProps}>{children}</Price>
}