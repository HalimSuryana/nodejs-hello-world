// Simple Node.js Hello World Web Server
// By: [Nama Kamu]

const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from Cloud Server!\nThis app is running successfully 🚀');
});

server.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
