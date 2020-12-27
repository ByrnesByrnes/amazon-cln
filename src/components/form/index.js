import React from 'react';
import {
  Container,
  Frame,
  Title,
  Subtitle,
  Input,
  Text,
  Image,
  Button,
  Link,
} from './styles/form'

export default function Form({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}
Form.Title = function FormTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}
Form.Subtitle = function FormSubtitle({children, ...restProps}) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}
Form.Frame = function FormFrame({children,...restProps}) {
  return <Frame {...restProps}>{children}</Frame>
}

Form.Input = function FormInput({ ...restProps}) {


  return <Input {...restProps} />
}

Form.Text = function FormText({children,...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

Form.Button = function FormButton({children,...restProps}) {
  return <Button {...restProps}>{children}</Button>
}

Form.Link = function FormLink({children,...restProps}) {
  return <Link {...restProps}>{children}</Link>
}

Form.Image = function FormImage({...restProps}) {
  return <Image {...restProps}/>
}