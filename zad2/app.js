const PORT = 3000;
const http = require('http');
const homePage = require('./views/home.js');
const studentPage = require('./views/student.js');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(homePage.renderPage());
  } else if (url === '/student') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(studentPage.renderPage());
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('<h1>404 - Strona nie znaleziona</h1>');
  }
  res.end();
});

server.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
