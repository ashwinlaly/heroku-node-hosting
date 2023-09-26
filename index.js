var http = require('http');
var express = require('express')
var app = express()
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Define a Socket.IO event handler for incoming connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Define event handlers for custom events
  socket.on('chat message', (message) => {
    console.log('Received message:', message);
    
    // Broadcast the message to all connected clients
    io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
