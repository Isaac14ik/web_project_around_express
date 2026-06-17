const express = require('express');
const Card = require('../models/card');

const router = express.Router();

router.get('/', (req, res) => {
  Card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch(() => res.status(500).send({ message: 'Error al obtener las tarjetas' }));
});

router.post('/', (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.status(201).send(card))
    .catch(() => res.status(400).send({ message: 'Error al crear la tarjeta' }));
});

router.delete('/:cardId', (req, res) => {
  const { cardId } = req.params;

  Card.findByIdAndDelete(cardId)
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'ID de tarjeta no encontrado' });
      }
      return res.status(200).send({ message: 'Tarjeta eliminada exitosamente' });
    })
    .catch(() => res.status(500).send({ message: 'Error al eliminar la tarjeta' }));
});

router.put('/:cardId/likes', (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'ID de tarjeta no encontrado' });
      }
      return res.status(200).send(card);
    })
    .catch(() => res.status(500).send({ message: 'Error al procesar el like' }));
});

router.delete('/:cardId/likes', (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => {
      if (!card) {
        return res.status(404).send({ message: 'ID de tarjeta no encontrado' });
      }
      return res.status(200).send(card);
    })
    .catch(() => res.status(500).send({ message: 'Error al procesar el dislike' }));
});

module.exports = router;
