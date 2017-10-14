// @flow

import React from 'react'

type Props = {
  src: string,
  alt: string,
}

const Card = ({ src, alt }: Props) =>
  <img src={src} alt={alt} />


export default Card
