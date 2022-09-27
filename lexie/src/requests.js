const axios = require('axios');
const basePath = 'http://localhost:4000';

module.exports = {
  getStudents: () => {
    console.log('BASE PATH IS', basePath);
    return axios({
      url: '/students',
      method: 'get',
      baseURL: 'http://localhost:4000'
    })
  },

  studentGetAssignment: (id) => {
    return axios({
      url: '/students/assignments',
      method: 'get',
      baseURL: basePath,
      params: {assignment_id: id}
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

  addAssignment: (body) => {
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
  }



}