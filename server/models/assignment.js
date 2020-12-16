const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [String],
  description: String,
  concept: String,
  link: String,
  subject_id: String,
});

module.exports = mongoose.model('Assignment', assignmentSchema);
