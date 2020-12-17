const Assingment = require('../models/assignment');

const getAssignmentListBySubjectId = async (id) => {
  const assignmentList = await Assingment.find();
  const filtered = assignmentList.filter((ass) => ass.subject_id == id);
  return filtered;
};

module.exports = getAssignmentListBySubjectId;
