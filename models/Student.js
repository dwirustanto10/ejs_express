// const { rejects } = require('assert');
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
// const { resolve } = require('path');

class Student {
  constructor(id, name, major, semester, city) {
    this.id = id;
    this.name = name;
    this.major = major;
    this.semester = semester;
    this.city = city;
  }

  static getAllStudents() {
    return new Promise((resolve, rejects) => {
      fs.readFile('./json/student.json', 'utf8', (err, data) => {
        if (err) {
          rejects(err);
        } else {
          let students = JSON.parse(data);
          students = students.map((student) => {
            const { id, name, major, semester, city } = student;
            return new Student(id, name, major, semester, city);
          });
          resolve(students);
        }
      });
    });
  }

  static getHistory(id) {
    return new Promise((resolve, reject) => {
      this.getAllStudents()
        .then((result) => {
          let students = result;
          let findOneStudent = students.filter((student) => student.id === id);
          // Beljm sudah()
          if (findOneStudent.length !== 0) {
            resolve(findOneStudent[0]);
          } else {
            throw {
              message: `Student with id ${id} is not found!`,
            };
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static create(student) {
    return new Promise((resolve, reject) => {
      this.getAllStudents()
        .then((result) => {
          let students = result;
          const id = students[students.length - 1].id + 1;
          const { name, major, semester, city } = student;

          let studentClass = new Student(id, name, major, semester, city);
          students.push(studentClass);

          this.save(students);
          resolve(studentClass);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      this.getAllStudents()
        .then((result) => {
          let students = result;
          students = students.filter((student) => student.id !== id);

          this.save(students);
          resolve(`Student with id ${id} has been deleted`);
        })
        .catch((err) => reject(err));
    });
  }

  static update(studentId, student) {
    return new Promise((resolve, reject) => {
      this.getAllStudents()
        .then((result) => {
          let students = result;
          const { name, major, semester, city } = student;
          students = students.map((student) => {
            if (student.id === studentId) {
              student.name = name;
              student.major = major;
              student.semester = semester;
              student.city = city;
            }
            return student;
          });

          this.save(students);

          resolve(`Student with id ${studentId} has been updated`);
        })
        .catch((err) => reject(err));
    });
  }

  static search(searchQuery) {
    return new Promise((resolve, reject) => {
      this.getAllStudents()
        .then((result) => {
          let study = result;
          const { name } = searchQuery;

          let findOneStudent = study.filter((student) => student.name === name);

          resolve(findOneStudent);
        })
        .catch((err) => reject(err));
    });
  }

  static save(students) {
    fs.writeFileSync('./json/student.json', JSON.stringify(students, null, 3));
  }
}

module.exports = Student;
