const { Router } = require('express');
const { check } = require('express-validator');
const { getRandom, getById } = require('../controllers/quotes.controller');
const { validateFields } = require('../helpers/validateFields');

const router = Router();

router.get('/:num?', [
    check('num', 'The parameter must be an integer numeric value').isInt(),
    validateFields
], getRandom);

router.get('/by/:id', [
    check('id', 'The id must be an integer numeric value').isInt(),
    validateFields
], getById);

module.exports = router;