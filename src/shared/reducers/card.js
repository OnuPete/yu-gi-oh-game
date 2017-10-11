// @flow

import createReducer from '../utils/redux-helpers'

const initialState: {
  cards: Array<Object>,
  card: Object,
  loading: boolean
} = {
  cards: [],
  card: {},
  loading: false,
}

const cardReducer = createReducer(initialState, {
  GET_CARDS_REQUEST(state: Object) {
    return {
      ...state,
      loading: true,
    }
  },
  GET_CARDS_SUCCESS(state: Object, action: { type: string, payload: Array<Object> }) {
    return {
      ...state,
      loading: false,
      cards: action.payload,
    }
  },
  GET_CARDS_FAILURE(state: Object) {
    return {
      ...state,
      loading: false,
      cards: [],
    }
  },
  SET_CARD_VIEW(state: Object, action: { payload: Object }) {
    return {
      ...state,
      card: action.payload,
    }
  },
})

export default cardReducer
