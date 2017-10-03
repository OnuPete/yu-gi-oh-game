// @flow

import createReducer from '../utils/redux-helpers'

const initialState: {
  message: string,
  messageAsync: string,
} = {
  message: 'Initial reducer message',
  messageAsync: 'Initial reducer message for async call',
}

const helloReducer = createReducer(initialState, {
  SAY_HELLO(state: any, action: { type: string, payload: string, }) {
    return {
      ...state,
      message: action.payload,
    }
  },
  SAY_HELLO_ASYNC_REQUEST(state: any) {
    return {
      ...state,
      messageAsync: 'Loading...',
    }
  },
  SAY_HELLO_ASYNC_SUCCESS(state: any, action: { type: string, payload: string }) {
    return {
      ...state,
      messageAsync: action.payload,
    }
  },
  SAY_HELLO_ASYNC_FAILURE(state: any) {
    return {
      ...state,
      messageAsync: 'No message received, please check your connection',
    }
  },
})

export default helloReducer
