const route = require('express').Router();

// route.get('/', (req, res) => {
//   res.send('Home Page');
// });

route.get('/', (req, res) => {
  // res.send({
  //   message: 'Welcome My Home Page',
  // });
  res.render('index.ejs');
});

const lectureRoutes = require('./lecture');
const studentRoutes = require('./student');
route.use('/lectures', lectureRoutes);
route.use('/students', studentRoutes);

// route.get('/lecturers', (req, res) => {
//   res.send('lecturers page');
// });

// route.get('/students', (req, res) => {
//   res.send('students page');
// });

module.exports = route;
