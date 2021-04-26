import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { HeaderContainer } from './container/header'
import { StateContext, StateContextConsumer } from './context/state'
import { ProtectedRoute} from './helpers/routes'
import { auth } from './firebase/config'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import {
  Home,
  Checkout,
  Payment,
  Login,
  Signup,
  Browse,
  ProductPage,
  Orders
} from './pages'

const promise = loadStripe('pk_test_cD4OWMH3AI2yCM5yrcBQB5fV')

function App() {
  const [state, dispatch] = StateContext()

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          payload: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          payload: null
        })
      }
    })

  }, [])

  const user = state.user

  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_UP}>
          <Signup />
        </Route>
        <Route path={ROUTES.LOGIN}>
          <Login />
        </Route>
        <Route path={ROUTES.ORDERS}>
          <HeaderContainer />
          <Orders />
        </Route>
        <Route path={`${ROUTES.PRODUCT}/:id`}>
          <HeaderContainer />
          <ProductPage />
        </Route>
        <Route path={ROUTES.BROWSE}>
          <HeaderContainer />
          <Browse />
        </Route>

        <ProtectedRoute user={user} path={ROUTES.PAYMENT}>
          <HeaderContainer />
          <StateContextConsumer>
            {([{ user, cart }, dispatch]) => (
              <Elements stripe={promise}>
                <Payment cart={cart} dispatch={dispatch} user={user} />
              </Elements>
            )}
          </StateContextConsumer>
        </ProtectedRoute>


        <Route path={ROUTES.CHECKOUT}>

          <HeaderContainer />
          <Checkout />

        </Route>
        <Route path={ROUTES.HOME}>
          <HeaderContainer />
          <Home />
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
