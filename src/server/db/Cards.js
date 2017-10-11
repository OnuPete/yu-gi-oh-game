// @flow

import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/yugioh-db')
mongoose.connection.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('Connected with MongoDB ORM - yugioh-db')
})

// "name": "Dragon Queen of Tragic Endings",
// "text": string,
// "card_type": "monster",
// "type": "Dragon / Effect",
// "family": "dark",
// "atk": 1900,
// "def": 2600,
// "level": 6,

const cardsSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true, index: true },
  text: String,
  cardType: String,
  attribute: String,
  family: String,
  type: String,
  atk: Number,
  def: Number,
  level: Number,
  property: String,
  cardImageUrl: String,
})

module.exports = mongoose.model('Cards', cardsSchema)
