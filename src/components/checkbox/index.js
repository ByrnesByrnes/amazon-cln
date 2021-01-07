import React from 'react';
import {
  Container,
  Label,
  Checkmark,
  Input,
} from './styles/checkbox'

export default function Checkbox({children, checked, ...restProps}) {
  return (
    <Container {...restProps}>
      <Checkbox.Label>{children}</Checkbox.Label>
      <Checkbox.Input type="checkbox" checked={checked} readOnly/>
      <Checkbox.Checkmark></Checkbox.Checkmark>
    </Container>
  )
}

Checkbox.Label = function CheckboxLabel({children, ...restProps}) {
  return <Label {...restProps}>{children}</Label>
}

Checkbox.Input = function CheckboxInput({...restProps}) {
  return <Input {...restProps} />
}

Checkbox.Checkmark = function CheckboxCheckmark({children, ...restProps}) {
  return <Checkmark {...restProps}>{children}</Checkmark>
}