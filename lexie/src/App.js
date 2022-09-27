import './App.css';
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import Homepage from './components/Homepage.jsx';
import TeacherDashboard from './components/teachers/TeacherDashboard.jsx';
import AssignmentBuilder from './components/teachers/AssignmentBuilder.jsx';

// const sampleData = require('./components/sampledata.js');
const please = require('./requests.js');

function App() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState('homepage');
  // eslint-disable-next-line
  const [assignments, setAssignments] = useState([]);
  // options: homepage, teacher-dashboard, reports, assignment-builder, student-dashboard, student-assignment

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
    {page === 'homepage' &&
      <div className="App">
        <h1>
          Lexie
        </h1>
        <h2>Select your role to begin!</h2>
        <Homepage students={students} setPage={setPage}/>
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
      <AssignmentBuilder setPage={setPage} />
    }
    {page === 'student-dashboard' &&
      <div>
        Student Dashboard
      </div>
    }
    {page === 'student-assignment' &&
      <div>
        Student Assignment
      </div>
    }
    </>
  );
}

export default App;
