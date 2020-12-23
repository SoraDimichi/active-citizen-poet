const router = require('express').Router();

const {
  getVerses,
} = require('../controllers/verses');

router.get('/verses', getVerses);

module.exports = router;
