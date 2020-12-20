const Assingment = require('../models/assignment');

// const create = async (name, team, description, concept,
//   link, imageLink, subjectId, assignmentId) => {
//   const assignment = new Assingment({
//     name,
//     team,
//     description,
//     concept,
//     link,
//     image_link: imageLink,
//     subject_id: subjectId,
//     assignment_id: assignmentId,
//   });
//   const result = await assignment.save();
//   return result;
// };

const getAssignmentById = async (id) => {
  const assignmentList = await Assingment.find();
  const filtered = assignmentList.find((ass) => ass._id == id);
  return filtered;
};

module.exports = getAssignmentById;
