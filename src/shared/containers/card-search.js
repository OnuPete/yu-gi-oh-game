// @flow

import { connect } from 'react-redux'

import { getCards } from '../actions/card'
import Search from '../components/search'

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => ({
  handleKeyPress: (e) => {
    if (e.charCode === 13) {
      e.preventDefault()
      const name = e.target.value
      dispatch(getCards(name))
    }
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
