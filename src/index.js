import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import history from './dependencies/history'
import configureStore from './store/configureStore'
import './styles/index.scss'

import Products from './scenes/Products'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/' exact component={Products} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
