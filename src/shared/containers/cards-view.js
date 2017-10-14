// @flow

import { connect } from 'react-redux'

import { setCardView } from '../actions/card'
import CardsList from '../components/cards-list'

const mapStateToProps = state => ({
  cards: state.card.cards,
})

const mapDispatchToProps = dispatch => ({
  handleClick: (card) => { dispatch(setCardView(card)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsList)
