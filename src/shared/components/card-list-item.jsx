// @flow

import React from 'react'

import Card from './card'

type Props = {
  card: Object,
  handleClick: Function,
}

const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

const CardListItem = ({ card, handleClick }: Props) => {
  const description = card.cardType === 'monster' ? (
    <div>
      <h4> {capitalize(card.attribute)} / { card.type} ⭐ {card.level} </h4>
      <h5> {card.atk}/{card.def} </h5>
    </div>
  ) : (
    <div>
      <h4> {capitalize(card.cardType)} </h4>
      <h5> {card.property} </h5>
    </div>
  )
  return (<div onClick={handleClick} tabIndex={0} role="button">
    <Card
      src={card.cardImageUrl}
      alt={card.name}
    />
    <h3>{card.name}</h3>
    {description}
  </div>)
}

export default CardListItem
