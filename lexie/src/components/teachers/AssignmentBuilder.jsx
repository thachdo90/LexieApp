import { Button, TextField, Grid, Paper, Input } from '@mui/material';
import React, { useState } from 'react';

const please = require('../../requests.js')
const generateGlossary = require('./glossary.js');

const AssignmentBuilder = ({ setPage, user, setAssignments }) => {

  const [glossary, setGlossary] = useState([]);

  const handleSubmit = () => {
    // do some form validation first
    let title = document.getElementById('assignment-title').value;
    let text = document.getElementById('text-field').value;
    if (title === '' || glossary.length === 0 || text === '') {
      alert('Your assignment is incomplete!')
    } else {
      please.teacherAddAssignment({
          title: title,
          glossary: glossary
        })
      .then(() => please.teacherGetAssignment())
      .then((data) => setAssignments(data.data))
      .then(() => setPage('teacher-dashboard'))
      // get assignment to see newly added entry
      .catch(error => console.log(error))
    }

  }

  const populateGlossary = async () => {
    let text = document.getElementById('text-field').value;
    let words = await generateGlossary(text);
    setGlossary(words);
  }

  return (
    <>
      <h1>Assignment Builder</h1>
      <Input
        placeholder="Title of Assignment"
        required
        id="assignment-title"/>
      <Grid container>
        <Grid item style={{width: 500, height: 1000}}>
          <TextField
            fullWidth={true}
            id='text-field'
            placeholder='Paste the reading passage here'
            minRows='27'
            multiline={true}
            >
          </TextField>
        </Grid>
        <Grid item style={{width: 500, height: 1000}}>
          <Paper
          elevation='4'
          style={{padding: '20px'}}>
            <h1>Full Glossary</h1>
            <Button
              variant='contained'
              onClick={populateGlossary}>
              Generate Glossary
            </Button>
            <p>Students will be able to click and defined words in this list</p>
            {glossary.map(word => word.definition ? <p>{word.word}: {word.definition}</p> : null)}
          </Paper>
        </Grid>
      </Grid>
      <Button
        // later, make this disabled until all requirements are met
        onClick={handleSubmit}
        variant='contained'>
        Publish Assignment
      </Button>
    </>
  )
}

export default AssignmentBuilder;