import React, { useState, useEffect } from 'react';
import Homepage from './components/Homepage.jsx';
import TeacherDashboard from './components/teachers/TeacherDashboard.jsx';
import AssignmentBuilder from './components/teachers/AssignmentBuilder.jsx';
import StudentDashboard from './components/students/StudentDashboard.jsx';
import StudentAssignment from './components/students/StudentAssignment.jsx'
import LogoutButton from './components/LogoutButton.jsx'
import HomeButton from './components/HomeButton.jsx';

const please = require('./requests.js');

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
    <>
    {page !== 'login' &&
      <LogoutButton
      setUser={setUser}
      setPage={setPage}
      />
    }
    {!['login', 'teacher-dashboard', 'student-dashboard'].includes(page) &&
      <HomeButton user={user} setPage={setPage} />
    }
    {page === 'login' &&
      <div className="App">
        <h1>
          Lexie
        </h1>
        <h2>Select your role to begin!</h2>
        <Homepage
          students={students}
          setPage={setPage}
          setUser={setUser}/>
      </div>
    }
    {page === 'teacher-dashboard' &&
      <TeacherDashboard
      setPage={setPage}
      assignments={assignments} />
    }
    {page === 'reports' &&
      <div>
        Reports
      </div>
    }
    {page === 'assignment-builder' &&
      <AssignmentBuilder
        setPage={setPage}
        user={user}
        setAssignments={setAssignments}
      />
    }
    {page === 'student-dashboard' &&
      <StudentDashboard
        setPage={setPage}
        student={students.filter(student => student._id === user)[0]}
        assignments={assignments}
        setCurrentAssignment={setCurrentAssignment}
      />
    }
    {page === 'student-assignment' &&
      <StudentAssignment
        setPage={setPage}
        user={user}
        currentAssignment={currentAssignment}
      />
    }
    </>
  );
}

export default App;
