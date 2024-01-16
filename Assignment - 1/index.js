const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Adewumi Samson");
});

server.listen(8900);
