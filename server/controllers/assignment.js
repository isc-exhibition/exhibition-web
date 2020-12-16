const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const create = require('../services/assignment');

const MOCKUPAssingment = [
  {
    id: '1', name: 'DS의 모헙', members: '금진섭, 송지우, 장다연, 고지연', link: 'https://naver.com',
  },
  {
    id: '2', name: 'DS의 모헙2', members: '금진섭, 송지우, 장다연, 고지연', link: 'https://naver.com',
  },
];

const getAssginment = (req, res, next) => {
  const { id } = req.params;

  const assginment = MOCKUPAssingment.find((assignment) => assignment.id === id);

  if (!assginment) {
    return next(new HttpError('Could not find a assignment for that id', 404));
  }

  res.json({ assginment });
};

const createAssignment = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid params', 400),
    );
  }

  const {
    name, members, description, concept, link, subjectId, assignmentId,
  } = req.body;

  let assignment;
  try {
    assignment = await create(
      name, members, description, concept, link, subjectId, assignmentId,
    );
  } catch (err) {
    const error = new HttpError(
      'Creating Assignment failed',
      500,
    );
    return next(error);
  }

  res.status(201).json({ assginment: assignment });
};

exports.getAssginment = getAssginment;
exports.createAssignment = createAssignment;
