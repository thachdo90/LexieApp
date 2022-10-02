import { Button, ButtonGroup, Grid } from '@mui/material';

const LoginPage = ({ students, setPage, setUser }) => {
  return (
    <>
      <Grid
        item
        container
        direction='column'
        justifyContent='center'
        alignItems='center'>
        <h1 style={{fontSize: '100px'}}>Lexie</h1>
        <h2>Select your role to begin!</h2>
      <Grid item style={{margin: '20px'}}>
        <Button
          onClick={() => {
            setUser('teacher');
            setPage('teacher-dashboard');
          }}
          variant="contained"
          color="primary">
          Teacher
        </Button>
      </Grid>
      <Grid
        style={{width: '60%'}}
        item
        container
        spacing='10px'
        justifyContent='center'>
        {students.map(student => <Grid item>
        <Button
          variant="contained"
          color="secondary"
          spacing='10px'
          style={{width: '100px'}}
          key={student._id}
          student={student}
          onClick={() => {
            setUser(student._id)
            setPage('student-dashboard')
          }}>
          {student.name}
        </Button>
        </Grid>
        )}
      </Grid>
      </Grid>
    </>
  )
}

export default LoginPage;