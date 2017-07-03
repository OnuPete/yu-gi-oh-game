'use strict'

/**
* Scrapper calles once to get names of Yu-gi-oh card names
* and added to a JSON file.
**/

const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');

const writeLocation = `${__dirname}/db/cards.json`;

const scraperController = {
  getData: (req, res, next) => {
    request('https://www.yugiohcardguide.com/card_list.html', (error, response, html) => {
      let $ = cheerio.load(html);
      const cards = [];
      $('#card_data tr td').each((i, td) => {
        if (i % 2 !== 0) {
          $(td).find('a').each((i, a) => {
            cards.push({name: $(a).text()});
          })

        }
      });
      fs.writeFileSync(writeLocation, JSON.stringify(cards, null, 2));
      res.send(JSON.stringify(cards));
    })
  }
}

module.exports = scraperController;
