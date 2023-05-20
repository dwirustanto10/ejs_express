const Lecturer = require('../models/Lecturer');

class LecturerController {
  static getLecturers(req, res) {
    // res.send('Lecturer page');
    Lecturer.getAllLecturers()
      .then((result) => {
        // res.send(result);
        res.render('lecturer.ejs', { lecturers: result });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static createPage(req, res) {
    res.render('lecturerAddPage.ejs');
  }

  static create(req, res) {
    // console.log(req.body);

    Lecturer.create(req.body)
      .then((result) => {
        // res.send(result);
        res.redirect('/lectures');
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getHistory(req, res) {
    const id = Number(req.params.id);

    Lecturer.getHistory(id)
      .then((result) => {
        // res.send(result);
        res.render('lecturerInfo.ejs', { lecturer: result });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static delete(req, res) {
    const id = Number(req.params.id);

    Lecturer.delete(id)
      .then((result) => {
        // res.send(result);
        res.redirect('/lectures');
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static updatePage(req, res) {
    const id = +req.params.id;

    Lecturer.getHistory(id)
      .then((result) => {
        res.render('lecturerEditPage.ejs', { lecturer: result });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static update(req, res) {
    const id = Number(req.params.id);

    Lecturer.update(id, req.body)
      .then((result) => {
        // res.send(result);
        res.redirect('/lectures');
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
