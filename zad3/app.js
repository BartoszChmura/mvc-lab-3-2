const PORT = 3000;
const http = require('http');
const { handleHome, handleStudent } = require('./routes/index');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    handleHome(req, res);
  } else if (url === '/student' && req.method === 'GET') {
    handleStudent(req, res);
  } else if (url === '/' && req.method === 'POST') {
    res.writeHead(302, {'Location': '/student'});
    res.end();
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('<h1>404 Not Found</h1>');
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
