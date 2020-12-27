const router = require('express').Router();

const {
  getRandomVerse,
} = require('../controllers/verses');

router.get('/verse', getRandomVerse);

module.exports = router;
