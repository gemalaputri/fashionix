import React, { Component } from 'react'
import { Switch } from 'react-router'
import history from './dependencies/history'
import { Route, Router } from 'react-router-dom'

import Products from './scenes/Products'

class App extends Component {
	render() {
		return (
			<Router history={history}>
		    <Switch>
		      <Route path='/' exact component={Products} />
		    </Switch>
		  </Router>
		)
	}
}

export default App
