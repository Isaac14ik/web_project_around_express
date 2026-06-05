const express = require('express');
const users = require('./data/users.json');
const cards = require('./data/cards.json');

const app = express();
const PORT = 3000;

app.use(express.json());


app.get('/users', (req, res) => {
  res.send(users);
});


app.get('/cards', (req, res) => {
  res.send(cards);
});


app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u._id === id);

  if (!user) {
    return res.status(404).json({ message: 'ID de usuario no encontrado' });
  }

  return res.send(user);
});


app.use((req, res) => {
  res.status(404).json({ message: 'Recurso solicitado no encontrado' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});