const http = require('node:http');

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end('Hello World\n');
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
