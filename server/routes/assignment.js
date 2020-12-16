const express = require('express');
const { check } = require('express-validator');
const assignmentControllers = require('../controllers/assignment');

const router = express.Router();

router.get('/:id', assignmentControllers.getAssginment);

router.post(
  '/',
  [
    check('name')
      .not()
      .isEmpty(),
    check('concept')
      .not()
      .isEmpty(),
    check('description')
      .not()
      .isEmpty(),
    check('subjectId')
      .not()
      .isEmpty(),
  ],
  assignmentControllers.createAssignment,
);

module.exports = router;
