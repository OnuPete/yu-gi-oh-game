import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import {
  sayHello,
  sayHelloAsync,
  sayHelloAsyncRequest,
  sayHelloAsyncSuccess,
  sayHelloAsyncFailure,
} from '../../src/shared/actions/hello'

import helloReducer from '../../src/shared/reducers/hello'
import { helloEndpointRoute } from '../../src/shared/routes'

describe('Hello actions', () => {
  const mockStore = configureMockStore([thunkMiddleware])

  afterEach(() => {
    fetchMock.restore()
  })

  test('sayHelloAsync success', () => {
    fetchMock.get(helloEndpointRoute(666), { serverMessage: 'Async hello success' })
    const store = mockStore()
    return store.dispatch(sayHelloAsync(666))
      .then(() => {
        expect(store.getActions()).toEqual([
          sayHelloAsyncRequest(),
          sayHelloAsyncSuccess('Async hello success')
        ])
      })
  })

  test('sayHelloAsync 404', () => {
    fetchMock.get(helloEndpointRoute(666), 404)
    const store = mockStore()
    return store.dispatch(sayHelloAsync(666))
      .then(() => {
        expect(store.getActions()).toEqual([
          sayHelloAsyncRequest(),
          sayHelloAsyncFailure(),
        ])
      })
  })

  test('sayHelloAsync data error', () => {
    fetchMock.get(helloEndpointRoute(666), {})
    const store = mockStore()
    return store.dispatch(sayHelloAsync(666))
      .then(() => {
        expect(store.getActions()).toEqual([
          sayHelloAsyncRequest(),
          sayHelloAsyncFailure(),
        ])
      })
  })
})

describe('Hello reducers', () => {
  let helloState

  beforeEach(() => {
    helloState = helloReducer(undefined, {})
  })

  test('handle default', () => {
    expect(helloState.message).toBe('Initial reducer message')
    expect(helloState.messageAsync).toBe('Initial reducer message for async call')
  })

  test('handle SAY_HELLO', () => {
    helloState = helloReducer(helloState, sayHello('Test'))
    expect(helloState.message).toBe('Test')
  })

  test('handle SAY_HELLO_ASYNC_REQUEST', () => {
    helloState = helloReducer(helloState, sayHelloAsyncRequest())
    expect(helloState.messageAsync).toBe('Loading...')
  })

  test('handle SAY_HELLO_ASYNC_SUCCESS', () => {
    helloState = helloReducer(helloState, sayHelloAsyncSuccess('Test async'))
    expect(helloState.messageAsync).toBe('Test async')
  })

  test('handle SAY_HELLO_ASYNC_FAILURE', () => {
    helloState = helloReducer(helloState, sayHelloAsyncFailure())
    expect(helloState.messageAsync).toBe('No message received, please check your connection')
  })
})
