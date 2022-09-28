const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const ctrl = require('../database/controller.js');
const cors = require('cors');

const app = express();
const PORT = 4000;

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// ROUTES
app.route('/students')
  .get(ctrl.getStudents)

app.route('/students/assignments')
  .get(ctrl.studentGetAssignment)
  .post(ctrl.studentSubmitWork)

app.route('/teachers/assignments')
  .get(ctrl.teacherGetAssignment)
  .post(ctrl.teacherAddAssignment)
  .delete(ctrl.teacherDeleteAssignment)

app.route('/teachers/reports')
  .get(ctrl.teacherGetReport)

// adding students is out of scope for the current phase of this project, we'll stick with the 4 manually created students

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})