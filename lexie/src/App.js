import './App.css';
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import Homepage from './components/Homepage.jsx';
import TeacherDashboard from './components/teachers/TeacherDashboard.jsx';
import AssignmentBuilder from './components/teachers/AssignmentBuilder.jsx';
import StudentDashboard from './components/students/StudentDashboard.jsx';
import StudentAssignment from './components/students/StudentAssignment.jsx'

const please = require('./requests.js');

function App() {
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
