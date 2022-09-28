import { Button, Card, Grid, CardMedia, CardContent } from '@mui/material';

const randomImg = require('../../assets/randomImg.js')

const TeacherDashboard = ({ setPage, assignments, setCurrentAssignment }) => {
  return (
    <>
      <h1>
        Teacher Dashboard
      </h1>
      {assignments.length > 0
      ?
      <>
        <h3>Select a card below to see the report</h3>
        <Grid
        container
        spacing='10'>
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
      </>
      :
      <div>Try creating your first assignment!</div>
      }
      <Button
        onClick={() => setPage('assignment-builder')}
        variant='contained'
        color='primary'>
        Create Assignment</Button>
    </>
  )
}

export default TeacherDashboard;