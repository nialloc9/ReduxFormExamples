import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import Main from './containers/Main'

const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, app
)
