'use strict'
import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'

render (
  <Provider store={store}>
  <Root />
   </Provider>,
  document.getElementById('main')
)


//DO NOT MODIFY ME. I AM DONE AND DO NOT WANT TO PLAY