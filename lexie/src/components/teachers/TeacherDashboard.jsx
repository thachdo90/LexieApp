import { Button, Card, Grid, CardMedia, CardContent } from '@mui/material';

const randomImg = require('../../assets/randomImg.js')

const TeacherDashboard = ({ setPage, assignments, setCurrentAssignment }) => {
  return (
    <>
      <Grid item>
        <h1 style={{fontSize: '40px'}}>Teacher Dashboard</h1>
      </Grid>
      <Grid item>
        <Button
          onClick={() => setPage('assignment-builder')}
          variant='contained'
          color='primary'>
          Create Assignment
        </Button>
      </Grid>
      {assignments.length > 0
      ?
      <Grid
        item
        container
        direction='column'
        alignItems='center'>
        <Grid item>
          <h3>Select a card below to see the report</h3>
        </Grid>
        <Grid
        item
        container
        spacing='10'
        justifyContent='center'>
        { assignments.map(assignment => <Grid
          item
          key={assignment._id}>
            <Card
              raised={true}
              onClick={() => {
                setPage('reports')
                setCurrentAssignment(assignment._id)
              }}>
                <CardMedia
                // later: get a list view
                  component='img'
                  style={{
                    height: 140,
                    width: 210
                  }}
                  // later: give teachers ability to add their own image
                  image={assignment.image || randomImg()}
                />
                <CardContent>
                  {assignment.title}
                </CardContent>
            </Card>
          </Grid>)}
        </Grid>
      </Grid>
      :
      <Grid item>Try creating your first assignment!</Grid>
      }
    </>
  )
}

export default TeacherDashboard;