import './Reports.css';
import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@mui/material';
import BarGraph from './BarGraph.jsx';

const please = require('../../requests.js');

const Reports = ({ currentAssignment }) => {
  const [report, setReport] = useState({})
  const [studentFilter, setStudentFilter] = useState('none')

  useEffect(() => {
    please.teacherGetReport(currentAssignment)
      .then(data => {
        console.log(data.data)
        setReport(data.data)})
      .catch(error => console.log(error))
  }, [currentAssignment])

  return (
    <>
      <h1>Assignment Report</h1>
      {report.length > 0
      ?
      <>
        <Grid
          item
          style={{width: 800}}
          padding='10px'>
          <Paper
            elevation='3'>
            <BarGraph report={report} />
          </Paper>
        </Grid>
        <Grid
          container
          spacing='10'>
          <Grid
            item>
            <Paper
              elevation='3'
              style={{width: 200, padding: 20}}>
              <h1>Students</h1>
              <h3>Completed</h3>
              {/* iterating 4 times total but class size usually 35 max */}
              {report.filter(work => work.completed === true)
                .map(work => <p
                key={work.studentId}
                className={studentFilter === work.studentId ? 'active hover' : 'hover'}
                onClick={(() => {
                  studentFilter === work.studentId
                  ?
                  setStudentFilter('none')
                  :
                  setStudentFilter(work.studentId)
                })}
                >{work.name}</p>)}
              <h3>Not yet started</h3>
              {report.filter(work => work.completed === false)
                .map(work => <p key={work.studentId}>{work.name}</p>)}
            </Paper>
            <Grid item>
                <h1>Student Summaries</h1>
                {
                  studentFilter === 'none'
                  ?
                  report.filter(work => work.completed === true)
                  .map(work => <Grid item>
                      <Paper
                        style={{height: '100%', width: 600, padding: '10px', margin: '10px'}}>
                          <h3>{work.name}</h3>
                          <p>{work.summary}</p>
                      </Paper>
                    </ Grid>)
                  :
                  report.filter(work => work.studentId === studentFilter)
                  .map(work => <Grid item>
                    <Paper
                      style={{height: '100%', width: 600, padding: '10px', margin: '10px'}}>
                        <h3>{work.name}</h3>
                        <p>{work.summary}</p>
                        <p>Searched Words: {work.glossary.map(word => <span>{word}, </span>)}</p>
                    </Paper>
                  </ Grid>)
                }
            </Grid>
          </Grid>
        </Grid>
        <Paper>

        </Paper>
      </>
      :
      null
     }
    </>

  )
}

export default Reports;