import { Grid, Paper } from '@mui/material';

const Summaries = ({ studentFilter, report }) => {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'>
      <Grid item>
        <h1>Student Summaries</h1>
      </Grid>
      {studentFilter === 'none'
      ?
      report.filter(work => work.completed === true)
      .map(work =>
        <Grid item>
          <Paper
            style={{height: '100%', width: 600, padding: '10px', margin: '10px'}}>
              <h3>{work.name}</h3>
              <p>{work.summary}</p>
          </Paper>
        </ Grid>)
      :
      report.filter(work => work.studentId === studentFilter)
      .map(work =>
        <Grid item>
          <Paper
            style={{height: '100%', width: 600, padding: '10px', margin: '10px'}}>
              <h3>{work.name}</h3>
              <p>{work.summary}</p>
              <p>Searched Words: {work.glossary.map(word => <span>{word}, </span>)}</p>
          </Paper>
        </ Grid>)
      }
    </Grid>

  )

}

export default Summaries;