import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import {
  getCards,
  getCardsRequest,
  getCardsSuccess,
  getCardsFailure,
  setCardView,
} from '../../src/shared/actions/card'

import cardReducer from '../../src/shared/reducers/card'
import { cardEndpointRoute } from '../../src/shared/routes'

describe('Card actions', () => {
  const mockStore = configureMockStore([thunkMiddleware])

  afterEach(() => {
    fetchMock.restore()
  })

  test('getCards success', () => {
    fetchMock.get(cardEndpointRoute('Dark Magician'), {name:'Dark Magician'})
    const store = mockStore()
    return store.dispatch(getCards('Dark Magician'))
      .then(() => {
        expect(store.getActions()).toEqual([
          getCardsRequest(),
          getCardsSuccess({name: 'Dark Magician'})
        ])
      })
  })

  test('getCards 404', () => {
    fetchMock.get(cardEndpointRoute('Dark Magician'), 404)
    const store = mockStore()
    return store.dispatch(getCards('Dark Magician'))
      .then(() => {
        expect(store.getActions()).toEqual([
          getCardsRequest(),
          getCardsFailure(),
        ])
      })
  })

  test('getCards data error', () => {
    fetchMock.get(cardEndpointRoute('Dark Magician'), [])
    const store = mockStore()
    return store.dispatch(getCards('Dark Magician'))
      .then(() => {
        expect(store.getActions()).toEqual([
          getCardsRequest(),
          getCardsFailure(),
        ])
      })
  })
})

describe('Cards reducers', () => {
  let cardState
  beforeEach(() => {
    cardState = cardReducer(undefined, {})
  })

  test('handle default', () => {
    expect(cardState.cards).toEqual([])
    expect(cardState.card).toEqual({})
    expect(cardState.loading).toBe(false)
  })

  test('handle GET_CARDS_REQUEST', () => {
    cardState = cardReducer(cardState, getCardsRequest())
    expect(cardState.loading).toBe(true)
  })

  test('handle GET_CARDS_SUCCESS', () => {
    cardState = cardReducer(cardState, getCardsSuccess([{name: 'Dark Magician'}]))
    expect(cardState.cards.length).toBe(1)
    expect(cardState.cards[0].name).toBe('Dark Magician')
    expect(cardState.loading).toBe(false)
  })

  test('handle GET_CARDS_FAILURE', () => {
    cardState = cardReducer(cardState, getCardsFailure())
    expect(cardState.cards).toEqual([])
    expect(cardState.loading).toBe(false)
  })

  test('handle SET_CARD_VIEW', () => {
    cardState = cardReducer(cardState, setCardView({name: 'Dark Magician'}))
    expect(cardState.card.name).toBe('Dark Magician')
  })
})
