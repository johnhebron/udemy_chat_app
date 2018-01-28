const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server); // gives back the websockets server

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("new user connected");

  socket.emit("newMessage", {
    to: "User",
    text: "It's me, the server!"
  });

  socket.on('createMessage', (message) => {
    console.log(message);
  });

  socket.on('disconnect', (socket) => {
    console.log("connection lost");
  });
});

server.listen(port, () => {
  console.log(`App is running on ${port}`)
});
