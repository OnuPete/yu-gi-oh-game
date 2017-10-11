// @flow

import React from 'react'

import Card from './card'

type Props = {
  cards: Array<Object>,
  handleClick: Function,
}

const CardsView = ({ cards, handleClick }: Props) =>
  cards.map(card =>
    (<Card
      key={card.name}
      src={card.cardImageUrl}
      alt={card.name}
      onClick={() => handleClick(card)}
    />),
  )

export default CardsView
