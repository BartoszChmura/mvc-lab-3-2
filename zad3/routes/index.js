const homePage = require('../views/home.js');
const studentPage = require('../views/student.js');

function handleHome(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(homePage.renderPage());
  res.end();
}

function handleStudent(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(studentPage.renderPage());
  res.end();
}

module.exports = {
  handleHome,
  handleStudent
};
