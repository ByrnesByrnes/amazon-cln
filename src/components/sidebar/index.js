import React from 'react';
import * as ROUTES from '../../constants/routes'
import {
  Container,
  Link,
  Subtitle,
  Option,
  List,
  ListItem,
  Input,
  CheckMark,
  Label
} from './styles/sidebar'


export default function Sidebar({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Sidebar.Option = function SidebarOption({children, ...restProps}) {
  return <Option {...restProps}>{children}</Option>
}
Sidebar.Link = function SidebarLink({
  children, 
  search, 
  query="",
  title="", 
  queryTwo="", 
  ...restProps}) {
  return <Link to={`${ROUTES.BROWSE}?${search}=${query}${queryTwo ? '&price_to=' + queryTwo : ''}${title ? '&title=' + title : ''}`}  {...restProps}>{children}</Link>
}

Sidebar.Subtitle = function SidebarSubtitle({children, ...restProps}) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

Sidebar.List = function SidebarList({children, ...restProps}) {
  return <List {...restProps}>{children}</List>
}
Sidebar.ListItem = function SidebarListItem({children, ...restProps}) {
  return <ListItem {...restProps}>{children}</ListItem>
}
Sidebar.Input = function SidebarListItem({...restProps}) {
  return <Input {...restProps} />
}
Sidebar.CheckMark = function SidebarCheckMark({children,...restProps}) {
  return <CheckMark {...restProps}>{children}</CheckMark>
}

Sidebar.Label = function SidebarLabel({children, ...restProps}) {
  return <Label {...restProps}>{children}</Label>
}
