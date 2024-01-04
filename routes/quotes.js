const { Router } = require('express');
const { getRandom } = require('../controllers/quotes.controller');

const router = Router();

router.get('/:num?', getRandom);

module.exports = router;