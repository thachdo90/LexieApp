const { Student } = require('../database/model.js');
const db = require('../database/index.js');

const sampleStudents = ['Jordyn', 'Ben', 'Chris', 'Dalia', 'Jasmin', 'Noah', 'Damien', 'Juan', 'Mariela', 'Marianne', ]

const addStudents = async () => {
  for (let student of sampleStudents) {
    try {
      await Student.create({name: student})
    } catch (error) {
      console.log(error);
    }
  }
}

addStudents();