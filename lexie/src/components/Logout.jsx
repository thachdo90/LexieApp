import { Fab } from '@mui/material';
import { Logout } from '@mui/icons-material'

// have homepage go to the dashboard of the current user
// use context provide to get setPage and user anywhere
const LogoutButton = ({ setUser, setPage }) => {

  return (
    <Fab
    onClick={() => {
      setUser('');
      setPage('login');
    }}
    variant='contained'
    color='primary'
    size='large'>
      <Logout fontSize='large' />
    </Fab>
  )
}

export default LogoutButton;