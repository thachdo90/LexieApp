import HomeButton from '../HomeButton.jsx';
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
    setStudentGlossary([...studentGlossary, word]);
  }

  return(
    <>
      {Object.keys(assignmentIP).length > 0
      ?
      <Grid container>
        <Grid item style={{width: 500, height: 1000}}>
          <Paper
          elevation='4'
          style={{padding: '20px'}}>
            <h1>{assignmentIP.title}</h1>
            {assignmentIP.glossary.map(word => <span
              key={word._id}
              onClick={word.definition ? () => {addToGlossary(word)} : null}>
              {word.word} </span>)}
          </Paper>
        </Grid>
        <Grid item style={{width: 500, height: 1000}}>
          <Paper
          elevation='4'
          style={{padding: '20px'}}>
            <h1>My Glossary</h1>
            {studentGlossary.map(word => <p>{word.word}: {word.definition}</p>)}
          </Paper>
        </Grid>
      </Grid>
      :
      <div>Uh oh, this assignment doesn't exist</div>}
      <HomeButton setPage={setPage}/>
    </>
  )
}

export default StudentAssignment;