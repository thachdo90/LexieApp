const { Student } = require('../../database/model.js');
const db = require('../../database/index.js');

const sampleStudents = ['Adam', 'Beatrix', 'Corie', 'Dalia']

const addStudents = async () => {
  for (let student of sampleStudents) {
    await Student.create({name: student})
  }
}

addStudents();