const router = require('express').Router();
const {
  getEvents,
  createEvent,
} = require('../controllers/events');

router.get('/events', getEvents);
router.post('/events', createEvent);

// router.delete('/cards/:cardId', deleteCard);
//
// router.put('/cards/:cardId/likes', likeCard);
// router.delete('/cards/:cardId/likes', dislikeCard);

module.exports = router;
