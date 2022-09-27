import HomeButton from '../HomeButton.jsx';
import { Button, TextField, Box, Container, Grid, Paper } from '@mui/material';
import React, { useState } from 'react';

const generateGlossary = require('./glossary.js');

const AssignmentBuilder = ({ setPage }) => {

  const [glossary, setGlossary] = useState([]);

  const handleSubmit = () => {
    setPage('teacher-dashboard');
  }

  const populateGlossary = async () => {
    let text = document.getElementById('text-field').value;
    let words = await generateGlossary(text);
    console.log(words);
    setGlossary(words);
  }

  return (
    <>
      <h1>Assignment Builder</h1>
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
            <p>Students will be able to click and defined words in this list</p>
            {glossary.map(word => word.definition ? <p>{word.name}: {word.definition}</p> : null)}
          </Paper>
        </Grid>
      </Grid>
      <Button
        variant='contained'
        onClick={populateGlossary}
        >
        Generate Glossary
      </Button>
      <Button
        onClick={handleSubmit}
        variant='contained'>
        Publish Assignment
      </Button>
      <HomeButton setPage={setPage} />
    </>
  )
}

export default AssignmentBuilder;