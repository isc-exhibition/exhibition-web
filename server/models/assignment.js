const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [String],
  description: String,
  concept: String,
  link: String,
  subject_id: { type: Number, required: true },
  assignment_id: { type: Number, required: true },
});

assignmentSchema.index({ subject_id: 1, assignment_id: 1 }, { unique: true });

module.exports = mongoose.model('Assignment', assignmentSchema);
