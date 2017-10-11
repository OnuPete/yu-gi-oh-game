// @flow

import Cards from '../db/Cards'

const findCards = (type: string, parameter: string) => {
  const query = {}
  query[type] = new RegExp(parameter, 'i')
  return new Promise((resolve, reject) => {
    Cards.find(query, (err: Object, cards: Object) => {
      if (cards) return resolve(cards)
      return reject(err)
    })
  })
}

const cardsController = {
  index(req: Object, res: Object) {
    Cards.find(req.query, (err: Object, data: Object) => {
      if (err) return res.status(404).send('bad')

      return res.status(200).send(data)
    })
  },

  show(req: Object, res: Object) {
    const seen = []
    const data = []
    findCards('name', req.params.name)
      .then((cards) => {
        seen.push(...cards.map(card => card.name))
        data.push(...cards)
      })
      .then(() => findCards('text', req.params.name))
      .then((cards) => {
        data.push(...cards.filter(card => seen.indexOf(card.name) < 0))
      })
      .then(() => res.status(200).send(data))
      .catch(() => res.status(404).send('bad'))
  },
}


export default cardsController
