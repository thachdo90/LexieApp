import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@mui/material';

const please = require('../../requests.js');

const Reports = ({ currentAssignment }) => {
  const [report, setReport] = useState({})

  useEffect(() => {
    please.teacherGetReport(currentAssignment)
      .then(data => {
        console.log(data.data)
        setReport(data.data)})
      .catch(error => console.log(error))
  }, [currentAssignment])
  return (
    <>
      {report.length > 0
      ?
      <Grid container>
        <Grid
          item
          style={{width: 500, height:1000}}>
          Charts
        </Grid>
        <Grid
          item>
          <Paper
            elevation='3'
            style={{width: 300, padding: 20}}>
            <h1>Students</h1>
            <h3>Completed</h3>
            {/* iterating 4 times total but class size usually 35 max */}
            {report.filter(work => work.completed === true)
              .map(work => <p key={work.studentId}>{work.name}</p>)}
            <h3>Not yet started</h3>
            {report.filter(work => work.completed === false)
              .map(work => <p key={work.studentId}>{work.name}</p>)}
          </Paper>
        </Grid>
      </Grid>
      :
      null
     }
    </>

  )
}

export default Reports;