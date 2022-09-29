import './App.css'
import React, { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage.jsx';
import TeacherDashboard from './components/teachers/TeacherDashboard.jsx';
import AssignmentBuilder from './components/teachers/AssignmentBuilder.jsx';
import StudentDashboard from './components/students/StudentDashboard.jsx';
import StudentAssignment from './components/students/StudentAssignment.jsx'
import LogoutButton from './components/LogoutButton.jsx'
import HomeButton from './components/HomeButton.jsx';
import Reports from './components/teachers/Reports/Reports.jsx';
import { Container, Grid } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const please = require('./requests.js');
const theme = createTheme({

})

const App = () => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState('login');
  const [assignments, setAssignments] = useState([]);
  const [user, setUser] = useState('');
  const [currentAssignment, setCurrentAssignment] = useState('');

  // get student names and info
  useEffect(() => {
    please.getStudents()
    .then(data => setStudents(data.data))
    .catch(error => console.log(error));
  }, [])

  // get assignments
  useEffect(() => {
    please.teacherGetAssignment()
    .then(data => setAssignments(data.data))
    .catch(error => console.log(error));
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg'>
        <div className='app'>
          <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'>
            <Grid
              item
              container
              justifyContent='flex-end'>
              {page !== 'login' &&
                <Grid item>
                  <LogoutButton
                  setUser={setUser}
                  setPage={setPage}
                  />
                </Grid>
              }
              {!['login', 'teacher-dashboard', 'student-dashboard'].includes(page) &&
                <Grid item>
                  <HomeButton user={user} setPage={setPage} />
                </Grid>
              }
            </Grid>
            {page === 'login' &&
              <Grid
                item
                container
                justifyContent='center'
                alignItems='center'
                spacing='10px'
                style={{marginTop:'15%'}}>
                  <LoginPage
                    students={students}
                    setPage={setPage}
                    setUser={setUser}/>
              </Grid>
            }
            {page === 'teacher-dashboard' &&
              <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems='center'>
                <TeacherDashboard
                setPage={setPage}
                assignments={assignments}
                setCurrentAssignment={setCurrentAssignment} />
              </Grid>
            }
            {page === 'reports' &&
              <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems='center'>
                <Reports currentAssignment={currentAssignment} />
              </Grid>
            }
            {page === 'assignment-builder' &&
              <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems='center'>
                <AssignmentBuilder
                  setPage={setPage}
                  user={user}
                  setAssignments={setAssignments}
                />
              </Grid>
            }
            {page === 'student-dashboard' &&
              <Grid
              container
              direction='column'
              justifyContent='center'
              alignItems='center'>
                <StudentDashboard
                  setPage={setPage}
                  student={students.filter(student => student._id === user)[0]}
                  assignments={assignments}
                  setCurrentAssignment={setCurrentAssignment}
                />
              </Grid>
            }
            {page === 'student-assignment' &&
              <StudentAssignment
                setPage={setPage}
                user={user}
                currentAssignment={currentAssignment}
              />
            }
          </Grid>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
