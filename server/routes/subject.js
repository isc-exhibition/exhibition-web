const express = require('express');
const assignmentControllers = require('../controllers/assignment');

const router = express.Router();

router.get('/:id', assignmentControllers.getAssignmentList);

module.exports = router;
