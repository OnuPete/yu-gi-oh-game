// @flow

import React from 'react'

import CardListItem from './card-list-item'

type Props = {
  cards: Array<Object>,
  handleClick: Function,
}

const CardsList = ({ cards, handleClick }: Props) =>
  cards.map(card =>
    (<CardListItem
      key={card.name}
      card={card}
      handleClick={() => handleClick(card)}
    />),
  )

export default CardsList
