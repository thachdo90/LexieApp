const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { getStudents, updateStudents, getAssignment, addAssignment } = require('../database/controller.js')

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/assignments', getAssignment);

app.post('/assignments', addAssignment);

app.route('/students')
  .get(getStudents)
  .put(updateStudents)

// adding students is out of scope for the current phase of this project, we'll stick with the 4 manually created students

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})