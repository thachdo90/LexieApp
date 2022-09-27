const { Assignment, Student } = require('./model.js');
const db = require('./index');

module.exports = {
  getStudents: async (req, res) => {
    console.log('getting students information')
    try {
      let results = await Student.find({});
      res.send(results)
    } catch (err) {
      console.log(err)
      res.sendStatus(404)
    }
 }

}