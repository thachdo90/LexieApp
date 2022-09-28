import { Fab } from '@mui/material';
import { Home } from '@mui/icons-material'

// have homepage go to the dashboard of the current user
// use context provide to get setPage and user anywhere
const HomeButton = ({ user, setPage }) => {
  let home = user === 'teacher' ? 'teacher-dashboard' : 'student-dashboard';

  return (
    <Fab
    onClick={() => setPage(home)}
    variant='contained'
    color='primary'
    size='large'>
      <Home fontSize='large'/>
    </Fab>
  )
}

export default HomeButton;