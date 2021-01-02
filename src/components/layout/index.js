import React from 'react';
import {
  Container,
  Row,
  Group,
} from './styles/layout'


export default function Layout({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Layout.Row = function LayoutRow({children, ...restProps}) {
  return <Row {...restProps}>{children}</Row>
}

Layout.Group = function LayourGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}