import React from 'react';
import {
  Container,
  Column,
  Row,
  Group,
} from './styles/layout'


export default function Layout({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Layout.Column = function LayoutColumn({children, restProps}) {
  return <Column {...restProps}>{children}</Column>
}

Layout.Row = function LayoutRow({children, ...restProps}) {
  return <Row {...restProps}>{children}</Row>
}

Layout.Group = function LayourGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}

