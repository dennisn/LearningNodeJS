const http = require('node:http');

const port = process.env.PORT || 3000;
const [node_cmd, script_path, command, ...args] = process.argv;

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  const message = `Hello World\n`
    + ` Your command line arguments are ${JSON.stringify(process.argv)}\n`
    + ` Your command is ${command}\n`
    + ` Your arguments are ${JSON.stringify(args)}\n`;
  response.end(message);

});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
