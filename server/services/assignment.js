const Assingment = require('../models/assignment');

const create = async (name, members, description, concept, link, subjectId) => {
  const assignment = new Assingment({
    name,
    members,
    description,
    concept,
    link,
    subject_id: subjectId,
  });
  const result = await assignment.save();
  return result;
};

module.exports = create;
