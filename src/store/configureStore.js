import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import history from '../dependencies/history'
import thunk from 'redux-thunk'
import { products, productsIndexes } from '../scenes/Products/reducer'
import { productsFilterData } from '../scenes/Filter/reducer'

let composeEnhancers = compose

if (process.env.NODE_ENV === 'development') {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const rootReducer = combineReducers({
  products,
  productsFilterData,
	productsIndexes
});

export default function configureStore(initialState) {
  const _routerMiddleware = routerMiddleware(history)

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(
      _routerMiddleware,
			thunk
    ))
  );

	return store
}
