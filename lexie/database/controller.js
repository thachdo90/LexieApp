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
        // when getting all assignments, maybe leave the glossary out to cut back on data being sent
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
      let assignment = await Assignment.create(req.body);
      let students = await Student.find({});
      for (let student of students) {
        try {
          student.submittedWork.push({_id: assignment._id})
          await student.save();
        } catch (error) {
          console.log(error)
        }
      }
      res.sendStatus(201);
    } catch (err) {
      res.sendStatus(400);
    }
  },

  teacherDeleteAssignment: async (req, res) => {
    try {
      Assignment.deleteOne({_id: req._id})
      // also delete this from students?
    } catch (err) {
      res.sendStatus(404);
    }
  },

  teacherGetReport: async (req, res) => {
    let assignmentId = req.query.id;
    try {
      let students = await Student.find({});
      let studentWorks = [];
      console.log('STUDENTS', students);
      for (let student of students) {
        // this could potentially costs a lot of time
        // Maybe there's a better to search subdocuments
        let work = student.submittedWork.filter(work => (work.assignment_id).toString() === assignmentId);
        work = work[0];
        studentWorks.push({
          name: student.name,
          summary: work.summary,
          glossary: work.glossary,
          completed: work.completed
        })
      }
      res.send(studentWorks);
    } catch (err) {
      res.sendStatus(404);
    }
  },



  // METHODS FOR STUDENTS
  studentSubmitWork: async (req, res) => {
    console.log('recording student work')
    console.log(req.body);
    let studentId = req.body.student_id;
    let assignmentId = req.body.work._id;
    let newWork = req.body.work;
    try {
      let student = await Student.findOne({_id: studentId});
      let prevWork = await student.submittedWork.id(assignmentId);
      Object.assign(prevWork, newWork);
      await student.save();

      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },

  studentGetAssignment: async (req, res) => {
    console.log('getting assignment for student view');
    try {
      let result = await Assignment.findOne({_id: req.query._id})
      res.send(result);
    } catch (err) {
      res.sendStatus(404)
    }
  }

}