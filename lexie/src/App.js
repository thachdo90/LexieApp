import './App.css';
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import Homepage from './components/Homepage.jsx';
// const sampleData = require('./components/sampledata.js');
const please = require('./requests.js');

function App() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState('homepage');
  // options: homepage, teacher-dashboard, reports, assignment-builder, student-dashboard, student-assignment

  useEffect(() => {
    please.getStudents()
    .then(data => {
      console.log(students);
      setStudents(data.data);
    })
  }, ['do not repeat'])


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
      <div>
        Teacher Dashboard
      </div>
    }
    {page === 'reports' &&
      <div>
        Reports
      </div>
    }
    {page === 'assignment-builder' &&
      <div>
        Assignment Builder
      </div>
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
