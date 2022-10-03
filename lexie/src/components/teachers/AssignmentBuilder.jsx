import { Button, TextField, Grid, Paper, Input } from '@mui/material';
import React, { useState } from 'react';
import bookLoading from '../../assets/bookLoading.gif'

const please = require('../../requests.js')
const generateGlossary = require('./glossary.js');

const AssignmentBuilder = ({ setPage, user, setAssignments }) => {

  const [glossary, setGlossary] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const populateGlossary = () => {
    setLoading(true);
    let text = document.getElementById('text-field').value;
    generateGlossary(text, (glossary) => {
      setGlossary(glossary);
      setLoading(false);
    });
  }

  return (
    <>
      <Grid item>
        <h1>Assignment Builder</h1>
      </Grid>
      <Grid item>
        <Input
          placeholder="Title of Assignment"
          required
          id="assignment-title"
          style={{margin: '20px'}}/>
      </Grid>
      <Grid item container spacing='10px'>
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
            <Grid container justifyContent='center'>
              <Button
                variant='contained'
                onClick={populateGlossary}
                style={{marginRight:'10px'}}>
                Get Glossary
              </Button>
              <Button
                // later, make this disabled until all requirements are met
                onClick={handleSubmit}
                variant='contained'>
                Publish
              </Button>
            </Grid>
              {loading && <img src={bookLoading} alt='book loading icon' style={{width: '100%', marginTop: '20px'}}
              />}
            {glossary.length > 0 &&
              <>
                <h1 style={{textAlign: 'center'}}>Full Glossary</h1>
                <p>Students will be able to click and defined words in this list</p>
                {glossary.map(word => word.definition ? <p>{word.word}: {word.definition}</p> : null)}
              </>
            }
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default AssignmentBuilder;