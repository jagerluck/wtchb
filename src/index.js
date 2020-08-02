import ReactDOM from 'react-dom'
import React from 'react'
import App from './App.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reduceState } from './redux/reducers/frameReducer.js'


const store = createStore(reduceState)

const reactRoot = document.getElementById('react-root')


ReactDOM.render(
   <Provider store={store}>
      <App/>
   </Provider>,
   reactRoot
)

