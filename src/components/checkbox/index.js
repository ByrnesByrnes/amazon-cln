import React from 'react';
import {
  Container
} from './styles/checkbox'

export default function Checkbox({children}, ...restProps) {
  return <Container {...restProps}>{children}</Container>
}