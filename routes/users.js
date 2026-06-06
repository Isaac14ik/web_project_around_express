const fs = require('fs');
const path = require('path');


const pathToUsers = path.join(__dirname, 'users.json');

const getUsers = (req, res) => {
  fs.readFile(pathToUsers, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return res.status(500).send({ message: 'Error al leer los usuarios' });
    }

    const users = JSON.parse(data);
    return res.status(200).send(users);
  });
};

module.exports = { getUsers };