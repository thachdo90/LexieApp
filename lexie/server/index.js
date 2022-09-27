const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { getStudents } = require('../database/controller.js')

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(morgan('dev'));

//later: add lexie endpoint
app.get('/assignments', (req, res) => {
  res.send('here are your assignments')
})

app.post('/assignments', (req, res) => {
  console.log('message body', req.body);
  res.sendStatus(201);
})

app.get('/students', getStudents)

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})