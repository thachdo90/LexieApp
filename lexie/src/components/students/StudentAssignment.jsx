import './StudentAssignment.css';
import { Button, TextField, Grid, Paper, Input } from '@mui/material';
import React, { useEffect, useState } from 'react';

const please = require('../../requests.js');

const StudentAssignment = ({ setPage, user, currentAssignment }) => {
  const [assignmentIP, setAssignmentIP] = useState({});
  const [studentGlossary, setStudentGlossary] = useState([]);

  useEffect(() => {
    // currently redundant, needed later when app won't be able to get glossary field
    please.studentGetAssignment(currentAssignment)
    .then((data) => {
      console.log(data.data)
      setAssignmentIP(data.data)})
    .catch(err => console.log(err))
  }, [currentAssignment])

  const addToGlossary = (word) => {
    // later: create an object to track unique words
    // bug: duplicate words are separate entities, this should be fixed by implementing an object to keep track
    if (!studentGlossary.includes(word)) {
      setStudentGlossary([word, ...studentGlossary]);
    }
  }

  const submitWork = () => {
    let glossary = studentGlossary.map(word => word.word)
    let summary = document.getElementById('summary').value;
    if (summary.length < 100) {
      alert('Please summarize the passage with at least 100 characters!')
    } else {
      let studentWork = {
      student_id: user,
      work: {
        assignment_id: currentAssignment,
        summary: summary,
        glossary: glossary,
        completed: true
        }
      }
      please.submitWork(studentWork)
      .then(() => setPage('student-dashboard'))
      .catch(error => console.log(error))
      // perform follow up get requests to update status of this student's assignment
    }

  }

  return(
    <>
      <Button
        variant='contained'
        onClick={submitWork}>
        Submit
      </Button>
      {Object.keys(assignmentIP).length > 0
      ?
      <>
        <Grid container>
          <Grid item style={{width: 500, height: 700}}>
            <Paper
            elevation='4'
            style={{padding: '20px'}}>
              <h1>{assignmentIP.title}</h1>
              {assignmentIP.glossary.map(word => <span
                key={word._id}
                onClick={word.definition ? () => {addToGlossary(word)} : null}
                className={word.definition ? 'searchable' : null}>
                {word.word} </span>)}
            </Paper>
          </Grid>
          <Grid item style={{width: 500, height: 700}}>
            <Paper
            elevation='4'
            style={{padding: '20px'}}>
              <h1>My Glossary</h1>
              {studentGlossary.map(word => <p>{word.word}: {word.definition}</p>)}
            </Paper>
          </Grid>
        </Grid>
        <TextField
        fullWidth={true}
        id='summary'
        placeholder='Summarize the passage'
        minRows='5'
        multiline={true}
        >
        </TextField>
      </>
      :
      <div>Uh oh, this assignment doesn't exist</div>}
    </>
  )
}

export default StudentAssignment;