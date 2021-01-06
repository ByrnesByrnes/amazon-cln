import React from 'react';
import { 
  Container,
  Group,
  Text,
  Link
} from './styles/footer'

export default function Footer({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Footer.Group = function FooterGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}

Footer.Text = function FooterText({children,...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

Footer.Link = function FooterLink({children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}