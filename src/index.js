import ReactDOM from 'react-dom'
import React from 'react'
import { App } from './App.js'
import { Provider } from 'react-redux'
// import { store } from './redux/store.js'



const reactRoot = document.getElementById("react-root")


ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   reactRoot
)

