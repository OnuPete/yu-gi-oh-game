// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
import { cardEndpointRoute } from '../../shared/routes'

export const GET_CARDS_REQUEST = 'GET_CARDS_REQUEST'
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS'
export const GET_CARDS_FAILURE = 'GET_CARDS_FAILURE'
export const SET_CARD_VIEW = 'SET_CARD_VIEW'

export const getCardsRequest = createAction(GET_CARDS_REQUEST)
export const getCardsSuccess = createAction(GET_CARDS_SUCCESS)
export const getCardsFailure = createAction(GET_CARDS_FAILURE)
export const setCardView = createAction(SET_CARD_VIEW)

export const getCards = (name: ?string) => (dispatch: Function) => {
  dispatch(getCardsRequest())
  return fetch(cardEndpointRoute(name), {
    method: 'GET',
  })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      if (data.length < 1) throw Error('No cards received')
      dispatch(getCardsSuccess(data))
    })
    .catch(() => {
      dispatch(getCardsFailure())
    })
}
