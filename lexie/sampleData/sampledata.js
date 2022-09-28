const { Student } = require('../database/model.js');
const db = require('../database/index.js');

const sampleStudents = ['Jordyn', 'Ben', 'Chris', 'Dalia']

const addStudents = async () => {
  for (let student of sampleStudents) {
    await Student.create({name: student})
  }
}

addStudents();