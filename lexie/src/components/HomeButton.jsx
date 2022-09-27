import { Fab } from '@mui/material';
import { Home } from '@mui/icons-material'

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