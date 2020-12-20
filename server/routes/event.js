const express = require('express');
const eventControllers = require('../controllers/event');

const router = express.Router();

router.get('/', eventControllers.getEventLetterAnswer);

module.exports = router;
