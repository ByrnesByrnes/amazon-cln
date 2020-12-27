import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { HeaderContainer } from './container/header'
import { StateContext, StateContextConsumer } from './context/state'
import { auth } from './firebase/config'

import {
  Home,
  Checkout,
  Payment,
  Login,
  Signup,
  Browse,
  ProductPage,
} from './pages'

function App() {
  const [state,dispatch] = StateContext()

  useEffect(()=> {

    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          payload: authUser.displayName
        })
      } else {
        dispatch({
          type: 'SET_USER',
          payload: null
        })
      }
    })

  },[])


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={ROUTES.SIGN_UP}>
            <Signup />
          </Route>
          <Route path={ROUTES.LOGIN}>
            <Login />
          </Route>
          <Route path={`${ROUTES.PRODUCT}/:id`}>
            <HeaderContainer />
            <ProductPage />
          </Route>
          <Route path={`${ROUTES.BROWSE}`}>
            <HeaderContainer />
            <Browse />
          </Route>
          <Route path={`${ROUTES.CHECKOUT}${ROUTES.PAYMENT}`}>
            <HeaderContainer />
            <StateContextConsumer>
              {([{ cart }, dispatch]) => (
                <Payment cart={cart} dispatch={dispatch} />
              )}
            </StateContextConsumer>
          </Route>
          <Route path={ROUTES.CHECKOUT}>

            <HeaderContainer />
            <Checkout />

          </Route>
          <Route path={ROUTES.HOME}>
            <HeaderContainer />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
