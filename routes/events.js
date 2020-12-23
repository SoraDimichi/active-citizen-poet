const router = require('express').Router();
const {
  getEvents,
} = require('../controllers/events');

router.get('/events', getEvents);

// router.delete('/cards/:cardId', deleteCard);
// router.post('/cards', createCard);
//
// router.put('/cards/:cardId/likes', likeCard);
// router.delete('/cards/:cardId/likes', dislikeCard);

module.exports = router;
