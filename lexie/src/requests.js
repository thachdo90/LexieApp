import axios from 'axios';
const basePath = 'http://localhost:4000';

module.exports = {
  getStudents: () => {
    return axios({
      url: '/students',
      method: 'get',
      baseUrl: basePath
    })
  },

  studentGetAssignment: (id) => {
    return axios({
      url: '/students/assignments',
      method: 'get',
      baseUrl: basePath,
      params: {assignment_id: id}
    })
  },

  submitWork: (body) => {
    return axios({
      url: '/students/assignments',
      method: 'post',
      baseUrl: basePath,
      data: body,
    })
  },

  addAssignment: (body) => {
    return axios({
      url: '/teachers/assignments',
      method: 'post',
      baseUrl: basePath,
      data: body
    })

  },

  teacherGetAssignment: (id) => {
    return axios({
      url: '/teachers/assignments',
      method: 'get',
      baseUrl: basePath,
      params: {assignment_id: id}
    })
  },

  teacherDeleteAssignment: (id) => {
    return axios({
      url: '/teachers/assignments',
      method: 'delete',
      baseUrl: basePath,
      params: {assignment_id: id}
    })
  }



}