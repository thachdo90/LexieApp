import './Reports.css';
import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@mui/material';
import BarGraph from './BarGraph.jsx';
import Summaries from './Summaries.jsx'
import StudentList from './StudentList.jsx'

const please = require('../../../requests.js');

const Reports = ({ currentAssignment }) => {
  const [report, setReport] = useState({})
  const [studentFilter, setStudentFilter] = useState('none')

  useEffect(() => {
    please.teacherGetReport(currentAssignment)
      .then(data => {
        setReport(data.data)})
      .catch(error => console.log(error))
  }, [currentAssignment])

  return (
    <>
      <Grid item>
        <h1>Assignment Report</h1>
      </Grid>
      {report.length > 0
      ?
      <Grid
        item
        container
        direction='column'
        justifyContent='center'
        alignItems='center'>
        <Grid
          item
          style={{width: 800}}
          padding='10px'>
          <Paper elevation='3'>
            <BarGraph report={report} />
          </Paper>
        </Grid>
        {/* Container for student list and summaries */}
        <Grid
          item
          container
          spacing='20'
          direction='row'
          justifyContent='center'
          alignItems='flex-start'
          style={{marginTop: '10px'}}>
          <Grid item>
            <StudentList report={report} studentFilter={studentFilter} setStudentFilter={setStudentFilter} />
          </Grid>
          <Grid item>
            <Summaries studentFilter={studentFilter} report={report}/>
          </Grid>
        </Grid>
      </Grid>
      :
      null
      }
    </>
  )
}

export default Reports;