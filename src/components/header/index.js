import React from 'react';
import  SearchIcon from '@material-ui/icons/Search'


import {
  Container,
  Logo,
  Search,
  Nav,
  NavLink,
  NavOption,

} from './styles/header'


export default function Header({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({children,...restProps}) {
  return <Logo {...restProps}>{children}</Logo>
}

Header.Search = function HeaderSearch({...restProps}) {
  return (
    <Search {...restProps}>
      <input type="text"/>
      <SearchIcon />
    </Search>
  )
}

Header.Nav = function HeaderNav({children, ...restProps}) {
  return <Nav {...restProps}>{children}</Nav>
}

Header.NavLink = function HeaderNavLink({children, ...restProps}) {
  return <NavLink {...restProps}>{children}</NavLink>
}

Header.NavOption = function HeaderNavOption({children, ...restProps}) {
  return <NavOption {...restProps}>{children}</NavOption>
}