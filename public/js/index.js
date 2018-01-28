let socket = io();

socket.on("connect", function () {
  console.log("connected to server");

  socket.emit('createMessage', {
    from: "Admin",
    text: "Welcome to the chat app!"
  });
});

socket.on("newMessage", function (message) {
  console.log(message);
});

socket.on("disconnect", function () {
  console.log("disconnected from server");
});
