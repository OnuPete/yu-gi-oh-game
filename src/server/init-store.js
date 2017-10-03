// @flow

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import helloReducer from '../shared/reducers/hello'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.hello) {
    // flow-disable-next-line
    preloadedState.hello = Object.assign(
      helloReducer(undefined, {}),
      { hello: plainPartialState.hello })
  }

  return createStore(combineReducers({ hello: helloReducer }),
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
