import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './globalStyles'
import { StateContextProvider } from './context/state'

ReactDOM.render(
  <React.StrictMode>
    <StateContextProvider>
      <GlobalStyle />
      <App />
    </StateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);