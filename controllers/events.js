const Event = require('../models/event');

// const NOT_FOUND = 404;
const BAD_REQUEST = 400;
const INTERNAL_SERVER_ERROR = 500;

const getEvents = (req, res) => Event.find({})
  .then((events) => res.status(200).send(events))
  .catch((err) => {
    switch (err.name) {
      default:
        return res.status(INTERNAL_SERVER_ERROR)
          .send({ message: 'На сервере произошла ошибка' });
    }
  });

const createEvent = (req, res) => Event.create(
  {
    name: req.body.name,
    imageLink: req.body.imageLink,
    owner: req.body.owner,
    date: req.body.date,
    address: req.body.address,
    type: req.body.type,
    verse: req.body.verse,
  },
)
  .then((event) => res.status(200).send(event))
  .catch((err) => {
    switch (err.name) {
      case 'ValidationError':
        return res.status(BAD_REQUEST)
          .send({ message: 'Переданы некорректные данные' });
      default:
        return res.status(INTERNAL_SERVER_ERROR)
          .send({ message: 'На сервере произошла ошибка' });
    }
  });
//
// const deleteCard = (req, res) => Card.findByIdAndRemove(
//   { _id: req.params.cardId },
// )
//   .then((card) => {
//     if (!card) {
//       return res.status(NOT_FOUND).send({ message: 'Карточка не найдена' });
//     }
//     return res.status(200).send(card);
//   })
//   .catch((err) => {
//     switch (err.name) {
//       case 'CastError':
//         return res.status(NOT_FOUND)
//           .send({ message: 'Карточка не найдена' });
//       default:
//         return res.status(INTERNAL_SERVER_ERROR)
//           .send({ message: 'На сервере произошла ошибка' });
//     }
//   });
//
// const likeCard = (req, res) => Card.findByIdAndUpdate(
//   req.params.cardId,
//   { $addToSet: { likes: req.user._id } },
//   { new: true },
// )
//   .then((card) => {
//     if (!card) {
//       return res.status(NOT_FOUND).send({ message: 'Карточка не найдена' });
//     }
//     return res.status(200).send(card);
//   })
//   .catch((err) => {
//     switch (err.name) {
//       case 'CastError':
//         return res.status(NOT_FOUND)
//           .send({ message: 'Карточка не найдена' });
//       default:
//         return res.status(INTERNAL_SERVER_ERROR)
//           .send({ message: 'На сервере произошла ошибка' });
//     }
//   });
//
// const dislikeCard = (req, res) => Card.findByIdAndUpdate(
//   req.params.cardId,
//   { $pull: { likes: req.user._id } },
//   { new: true },
// )
//   .then((card) => {
//     if (!card) {
//       return res.status(NOT_FOUND).send({ message: 'Карточка не найдена' });
//     }
//     return res.status(200).send(card);
//   })
//   .catch((err) => {
//     switch (err.name) {
//       case 'CastError':
//         return res.status(NOT_FOUND)
//           .send({ message: 'Карточка не найдена' });
//       default:
//         return res.status(INTERNAL_SERVER_ERROR)
//           .send({ message: 'На сервере произошла ошибка' });
//     }
//   });

module.exports = {
  getEvents,
  createEvent,
};
