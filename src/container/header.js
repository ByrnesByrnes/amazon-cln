import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { StateContextConsumer } from '../context/state'
import {auth} from '../firebase/config'

export function HeaderContainer() {
  return (
    <Header>
      <Link to={ROUTES.HOME}>
        <Header.Logo src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
      </Link>
      <Header.Search></Header.Search>
      <StateContextConsumer>
        {([{ cart, user }]) => (
            <Header.Nav>
              <Header.NavLink 
                to={!user ? ROUTES.LOGIN : ''} 
                onClick={() => user && auth.signOut()}
              >
                <Header.NavOption>Hello, {user ? user : "Guest"}</Header.NavOption>
                <Header.NavOption>Sign, {user ? 'Out' : 'In'}</Header.NavOption>
              </Header.NavLink>
              <Header.NavLink to={ROUTES.HOME}>
                <Header.NavOption>Returns</Header.NavOption>
                <Header.NavOption>& Orders</Header.NavOption>
              </Header.NavLink>
              <Header.NavLink to={ROUTES.HOME}>
                <Header.NavOption>Your</Header.NavOption>
                <Header.NavOption>Prime</Header.NavOption>
              </Header.NavLink>
              <Header.NavLink to={ROUTES.CHECKOUT}>
                <Header.NavOption>
                  {cart.length < 1 ? <ShoppingCartOutlinedIcon /> : <ShoppingCartIcon />}
                </Header.NavOption>
                <Header.NavOption>{cart.length}</Header.NavOption>
              </Header.NavLink>
            </Header.Nav>
        )}
      </StateContextConsumer>
    </Header>
  )
}