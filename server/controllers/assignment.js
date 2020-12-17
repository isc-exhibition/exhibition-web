const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const create = require('../services/assignment');
const getAssignmentListBySubjectId = require('../services/subject');
const getAssignmentById = require('../services/assignment');

const getAssignmentList = async (req, res, next) => {
  const { id } = req.params;

  const assignment = await getAssignmentListBySubjectId(id);
  if (!assignment) {
    return next(new HttpError('Could not find a assignment for that id', 404));
  }

  res.json({ assignment });
};

const getAssignment = async (req, res, next) => {
  const { id } = req.params;

  const assignment = await getAssignmentById(id);

  if (!assignment) {
    return next(new HttpError('Could not find a assignment for that id', 404));
  }

  res.json({ assignment });
};

const createAssignment = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid params', 400),
    );
  }

  const {
    name, team, description, concept, link, imageLink, subjectId, assignmentId,
  } = req.body;

  let assignment;
  try {
    assignment = await create(
      name, team, description, concept, link, imageLink, subjectId, assignmentId,
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

exports.getAssignmentList = getAssignmentList;
exports.createAssignment = createAssignment;
exports.getAssignment = getAssignment;
