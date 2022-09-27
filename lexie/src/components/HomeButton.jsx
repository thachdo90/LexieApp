import { Fab } from '@mui/material';
import { Home } from '@mui/icons-material'

// have homepage go to the dashboard of the current user
// use context provide to get setPage and user anywhere
const HomeButton = ({ setPage }) => {
  return (
    <Fab
    children={<Home />}
    onClick={() => setPage('homepage')}
    variant='contained'
    color='primary'
    size='large'>
    </Fab>
  )
}

export default HomeButton;