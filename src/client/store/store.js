// @flow

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import helloReducer from '../../shared/reducers/hello'
import cardReducer from '../../shared/reducers/card'
import { isProd } from '../../shared/util'

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const preloadedState = window.__PRELOADED_STATE__
/* eslint-enable no-underscore-dangle */

const store = createStore(
  combineReducers({ hello: helloReducer, card: cardReducer }),
  { hello: preloadedState.hello },
  composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
