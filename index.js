var http = require('http');
var express = require('express')
var app = express()

app.get("/", (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
})

app.listen(3000, () => {
  console.log(1)
})