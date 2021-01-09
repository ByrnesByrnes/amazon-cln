import React, { useState } from 'react';
import  SearchIcon from '@material-ui/icons/Search'
import { Link, useHistory } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

import {
  Container,
  Logo,
  Search,
  Nav,
  NavLink,
  NavOption,
  Button,

} from './styles/header'


export default function Header({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({children,...restProps}) {
  return <Logo {...restProps}>{children}</Logo>
}

Header.Search = function HeaderSearch({...restProps}) {
  const [searchTerm, setSearchTerm] = useState('')
  const history = useHistory()

  const handleSubmit= event => {
    event.preventDefault()
    history.push(`${ROUTES.BROWSE}${searchTerm.length > 0 ? `?title=${searchTerm}` : ''}`)
  }

  return (
    <Search {...restProps} onSubmit={handleSubmit}>
      <input 
        type="text" 
        onChange={event => setSearchTerm(event.target.value)}
      /> 
      <Button>
        <SearchIcon />
      </Button>
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