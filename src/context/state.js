import React, {useReducer, useContext, createContext} from "react";
import {reducer, state} from '../reducer'
const Context = createContext()
const {Provider, Consumer} = Context


function StateContextProvider({children}) {
  return (
    <Provider value={useReducer(reducer, state)}>
      {children}
    </Provider>
  )
}
const StateContext = () => useContext(Context)
export {StateContextProvider, StateContext, Consumer as StateContextConsumer}