// @flow

import { connect } from 'react-redux'

import { setCardView } from '../actions/card'
import CardsView from '../components/cards-view'

const mapStateToProps = state => ({
  cards: state.card.cards,
})

const mapDispatchToProps = dispatch => ({
  handleClick: (card) => { dispatch(setCardView(card)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsView)
