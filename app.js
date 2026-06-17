const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const PORT = 3000;
const DB_URL = 'mongodb://localhost:27017/aroundb';

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '6a32178fa7cf2b5eac6208ff'
  };
  next();
});

mongoose.connect(DB_URL)
  .then(() => {
    console.log('Conectado exitosamente a la base de datos aroundb');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Recurso solicitado no encontrado' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
