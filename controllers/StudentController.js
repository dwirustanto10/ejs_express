const Student = require('../models/Student');

class StudentController {
  static getStudents(req, res) {
    // res.send('Lecturer page');
    Student.getAllStudents()
      .then((result) => {
        // res.send(result);
        res.render('students.ejs', { students: result });
      })
      .catch((err) => {
        // console.log(err)
        res.send(err);
      });
  }

  static create(req, res) {
    // console.log(req.body);
    // res.send('Create Lecturer page');
    Student.create(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static getHistory(req, res) {
    const id = Number(req.params.id);

    Student.getHistory(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static delete(req, res) {
    const id = Number(req.params.id);

    Student.delete(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static update(req, res) {
    const id = Number(req.params.id);

    Student.update(id, req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static search(req, res) {
    console.log(req.query);
    Student.search(req.query)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = StudentController;
