const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { getStudents, teacherGetAssignment, teacherAddAssignment, teacherDeleteAssignment, studentSubmitWork, studentGetAssignment } = require('../database/controller.js')

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(morgan('dev'));

// create different route for students and teachers
// app.route('/assignments')
//   .get(getAssignment)
//   .post(addAssignment)

// app.route('/students')
//   .get(getStudents)
//   .put(updateStudents)

app.route('/students')
  .get(getStudents)

app.route('/students/assignments')
  .get(studentGetAssignment)
  .post(studentSubmitWork)

app.route('/teachers/assignments')
  .get(teacherGetAssignment)
  .post(teacherAddAssignment)
  .delete(teacherDeleteAssignment)

// adding students is out of scope for the current phase of this project, we'll stick with the 4 manually created students

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})