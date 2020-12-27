const Verse = require('../models/verse');

const INTERNAL_SERVER_ERROR = 500;
const NOT_FOUND = 404;

const randomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt) + minInt);
};

const getRandomVerse = (req, res) => Verse.findOne({ pk: randomInt(1, 16694) })
  .then((verse) => res.status(200).send(verse))
  .catch((err) => {
    switch (err.name) {
      case 'CastError':
        return res.status(NOT_FOUND)
          .send({ message: 'Пользователь не найден' });
      default:
        return res.status(INTERNAL_SERVER_ERROR)
          .send({ message: 'На сервере произошла ошибка' });
    }
  });

module.exports = {
  getRandomVerse,
};
