const Lecturer = require('../models/Lecturer');

class LecturerController {
  static getLecturers(req, res) {
    // res.send('Lecturer page');
    Lecturer.getAllLecturers()
      .then((result) => {
        // console.log(result)
        res.send(result);
      })
      .catch((err) => {
        // console.log(err)
        res.send(err);
      });
  }

  static create(req, res) {
    // console.log(req.body);
    // res.send('Create Lecturer page');
    Lecturer.create(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static getHistory(req, res) {
    const id = Number(req.params.id);

    Lecturer.getHistory(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static delete(req, res) {
    const id = Number(req.params.id);

    Lecturer.delete(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static update(req, res) {
    const id = Number(req.params.id);

    Lecturer.update(id, req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static search(req, res) {
    console.log(req.query);
    Lecturer.search(req.query)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = LecturerController;
