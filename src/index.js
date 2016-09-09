import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/root'

import App from './App'
import './index.css'

const DATABASE = 'sharp-eagle'

const localStorage = ({ getState }) => next => action => {
  const result = next(action)
  window.localStorage.setItem( DATABASE, JSON.stringify( getState() ))
  return result
}

const initialState = JSON.parse( window.localStorage.getItem( DATABASE ))

if (initialState === null) {
  var store = createStore( reducer )
}else {
  var store = createStore( reducer, initialState, applyMiddleware( localStorage ))
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
