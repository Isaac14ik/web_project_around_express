const fs = require('fs');
const path = require('path');


const pathToCards = path.join(__dirname, 'cards.json');

const getCards = (req, res) => {
  fs.readFile(pathToCards, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return res.status(500).send({ message: 'Error al leer las cartas' });
    }

    const cards = JSON.parse(data);
    return res.status(200).send(cards);
  });
};

module.exports = { getCards };