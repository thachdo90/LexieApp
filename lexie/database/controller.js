const { Assignment, Student } = require('./model.js');
const db = require('./index');

module.exports = {

  getStudents: async (req, res) => {
    console.log('getting students information')
    try {
      let results = await Student.find({});
      res.send(results);
    } catch (err) {
      console.log(err);
      res.sendStatus(404);
    }
  },
  // check data shape
  // METHODS FOR TEACHERS
  teacherGetAssignment: async (req, res) => {
    try {
      let result;
      if (Object.keys(req.query).length === 0) {
        result = await Assignment.find({});
      } else {
        result = await Assignment.findOne({_id: req.query._id});
      }
      res.send(result);
    } catch (err) {
      res.send(404);
    }
  },

  // might need to transform data before returning
  teacherAddAssignment: async (req, res) => {
    try {
      await Assignment.create(req.body);
      res.sendStatus(201);
    } catch (err) {
      res.sendStatus(400);
    }
  },

  teacherDeleteAssignment: async (req, res) => {
    try {
      Assignment.deleteOne({_id: req._id})
    } catch (err) {
      res.sendStatus(404);
    }
  },

  // METHODS FOR STUDENTS
  studentSubmitWork: async (req, res) => {
    console.log('updating student with work')
    console.log(req.body)
    try {
      // find and update student work, if not, create
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },

  studentGetAssignment: async (req, res) => {
    console.log('getting assignment for student view');
    try {
      let result = await Assignment.findOne({_id: req.id})
      res.send(result);
    } catch (err) {
      res.sendStatus(404)
    }
  }

}