const Assingment = require('../models/assignment');

const create = async (name, members, description, concept, link, subjectId, assignmentId) => {
  const assignment = new Assingment({
    name,
    members,
    description,
    concept,
    link,
    subject_id: subjectId,
    assignment_id: assignmentId,
  });
  const result = await assignment.save();
  return result;
};

module.exports = create;
