import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import cReducer from './redux/reducers/cReducer.js';
import App from './App.js';


const store = createStore(cReducer);

const reactRoot = document.getElementById('react-root')


ReactDOM.render(
   <Provider store={store}>
      <App/>
   </Provider>,
   reactRoot
)