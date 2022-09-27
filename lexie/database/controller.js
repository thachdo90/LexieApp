const { Assignment, Student } = require('./model.js');
const db = require('./index');

module.exports = {
  getAssignment: async (req, res) => {

  },

  addAssignment: async (req, res) => {

  },

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

  updateStudents: async (req, res) => {
    console.log('updating student with work')
    console.log(req.body)
    try {
      // find and update student work, if not, create
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  }

}