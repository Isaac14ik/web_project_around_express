const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch(() => res.status(500).send({ message: 'Error al obtener los usuarios' }));
});

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'ID de usuario no encontrado' });
      }
      return res.status(200).send(user);
    })
    .catch(() => res.status(500).send({ message: 'Error al buscar el usuario' }));
});

router.post('/', (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(201).send(user))
    .catch(() => res.status(400).send({ message: 'Error al crear el usuario' }));
});

router.patch('/me', (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Usuario no encontrado' });
      }
      return res.status(200).send(user);
    })
    .catch(() => res.status(400).send({ message: 'Error al actualizar el perfil' }));
});

router.patch('/me/avatar', (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Usuario no encontrado' });
      }
      return res.status(200).send(user);
    })
    .catch(() => res.status(400).send({ message: 'Error al actualizar el avatar' }));
});

module.exports = router;
