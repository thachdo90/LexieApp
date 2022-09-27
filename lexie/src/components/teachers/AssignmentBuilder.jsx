import HomeButton from '../HomeButton.jsx';
import { Button, TextField, Box } from '@mui/material';
import React, { useState } from 'react';

const generateGlossary = require('./glossary.js');

const AssignmentBuilder = ({ setPage }) => {

  const [glossary, setGlossary] = useState([]);

  const handleSubmit = () => {
    setPage('teacher-dashboard');
  }

  const populateGlossary = () => {
    let text = document.getElementById('text-field').value;
    let words = generateGlossary(text);
    console.log(words);
    setGlossary(words);
  }

  return (
    <>
      <h1>Assignment Builder</h1>
      <HomeButton setPage={setPage} />
      <TextField
        fullWidth={true}
        id='text-field'
        placeholder='Paste the reading passage here'
        minRows='200'
        // multiline={true}
        >
      </TextField>
      <Box>
        {glossary.map(word => <p>{word.name}: {word.definition}</p>)}
      </Box>
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
    </>
  )
}

export default AssignmentBuilder;