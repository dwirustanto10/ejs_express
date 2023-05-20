const lectureRoute = require('express').Router();
const LecturerController = require('../controllers/LectureController');

lectureRoute.get('/', LecturerController.getLecturers);
lectureRoute.get('/create', LecturerController.createPage);
lectureRoute.post('/create', LecturerController.create);
lectureRoute.get('/history/:id', LecturerController.getHistory);
lectureRoute.get('/delete/:id', LecturerController.delete);
lectureRoute.get('/update/:id', LecturerController.updatePage);
lectureRoute.post('/update/:id', LecturerController.update);
lectureRoute.get('/search', LecturerController.search);

module.exports = lectureRoute;
