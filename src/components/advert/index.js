import React from 'react';
import {
  Container,
  Ad,
} from './styles/advert'

export default function Advert({src, alt, ...restProps}) {
  console.log(alt)
  return (
    <Container {...restProps}>
      <Ad src={src} alt={alt} />
    </Container>
  )
}