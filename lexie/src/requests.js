const axios = require('axios');
const basePath = 'http://localhost:4000';

module.exports = {
  getStudents: () => {
    return axios({
      url: '/students',
      method: 'get',
      baseURL: basePath
    })
  },

  // STUDENT REQUESTS

  studentGetAssignment: (id) => {
    return axios({
      url: '/students/assignments',
      method: 'get',
      baseURL: basePath,
      params: {_id: id}
    })
  },

  submitWork: (body) => {
    return axios({
      url: '/students/assignments',
      method: 'post',
      baseURL: basePath,
      data: body,
    })
  },

  // TEACHER REQUESTS

  teacherAddAssignment: (body) => {
    return axios({
      url: '/teachers/assignments',
      method: 'post',
      baseURL: basePath,
      data: body
    })

  },

  teacherGetAssignment: (id) => {
    return axios({
      url: '/teachers/assignments',
      method: 'get',
      baseURL: basePath,
      params: {assignment_id: id}
    })
  },

  teacherDeleteAssignment: (id) => {
    return axios({
      url: '/teachers/assignments',
      method: 'delete',
      baseURL: basePath,
      params: {assignment_id: id}
    })
  },

  teacherGetReport: (id) => {
    return axios({
      url: '/teachers/assignments/reports',
      method: 'get',
      baseURL: basePath,
      params: {assignment_id: id}
    })
  },

  // DICTIONARY API
  getDefinition: (word) => {
    return axios({
      url: `${word}`,
      method: 'get',
      baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/'
    })
  }

}