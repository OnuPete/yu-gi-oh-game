// @flow

import React from 'react'

type Props = {
  src: string,
  alt: string,
  onClick: Function,
}

const Card = ({ src, alt, onClick }: Props) => (
  <div className="card-img" onClick={onClick} role="button" tabIndex={0}>
    <img src={src} alt={alt} />
  </div>
)

export default Card
