import HomeButton from '../HomeButton.jsx';
import { Button, TextField, Grid, Paper, Input } from '@mui/material';
import React, { useEffect, useState } from 'react';

const please = require('../../requests.js');

const StudentAssignment = ({ setPage, user, currentAssignment }) => {
  useEffect(() => {
  })

  return(
    <>
      {/* <Grid container>
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
      </Grid> */}
    </>
  )
}

export default StudentAssignment;