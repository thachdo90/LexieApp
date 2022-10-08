import { Button, ButtonGroup, Grid } from '@mui/material';
import bookOutline from '../assets/bookOutline.webp';
import './LoginPage.css';

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
        <div id='background-book'>
          <img src={bookOutline} alt='outline of a book' style={{width: '1000px', height: '1000px', opacity: '0.1'}}/>
        </div>
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
        {students.map(student => <Grid item key={student._id} >
        <Button
          variant="contained"
          color="secondary"
          spacing='10px'
          style={{width: '100px'}}
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