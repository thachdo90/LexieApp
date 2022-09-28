const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
  word: String,
  definition: String
})

const assignmentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  // array of objects? or can this be an object of objects for optimized search
  glossary: [wordSchema]
})

const submittedWorkSchema = mongoose.Schema({
  // _id will inherit assignment id
  summary: {
    type: String,
    default: ''
  },
  glossary: {
    type: Array,
    default: []
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const studentSchema = mongoose.Schema({
  name: String,
  submittedWork: [submittedWorkSchema]
})

const Assignment = mongoose.model('Assignment', assignmentSchema);
const Student = mongoose.model('Student', studentSchema);

module.exports = { Assignment, Student };