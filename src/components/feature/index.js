import React from 'react';

import {
  Container,
  Group,
  Title,
  Text,
  Link,
  Image,
  Item,
  Button,
  Login
} from './styles/feature'

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Feature.Group = function FeatureGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}
Feature.Login = function FeatureLogin({children, ...restProps}) {
  return <Login {...restProps}>{children}</Login>
}
Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Feature.Item = function FeatureItem({children, ...restProps}){
  return <Item {...restProps}>{children}</Item>
}
Feature.Text = function FeatureText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Feature.Image = function FeatureTitle({ ...restProps }) {
  return <Image {...restProps} />
}
Feature.Button = function FeatureButton({children, ...restProps}) {
  return <Button {...restProps}>{children}</Button>
}
Feature.Link = function FeatureLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}