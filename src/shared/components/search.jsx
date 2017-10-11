// @flow

import React from 'react'

type Props = {
  handleKeyPress: Function
}

const Search = ({ handleKeyPress }: Props) =>
  <input type="text" onKeyPress={handleKeyPress} />

export default Search
