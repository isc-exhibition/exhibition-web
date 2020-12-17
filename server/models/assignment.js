const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: String,
  description: String,
  concept: String,
  link: String,
  image_link: String,
  subject_id: { type: Number, required: true },
  assignment_id: { type: Number, required: true, unique: true },
});

module.exports = mongoose.model('Assignment', assignmentSchema);
