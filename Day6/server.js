import express from "express";
const app = express();
import http from "http";
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);
const users = {};
app.use(express.static("."));
app.get("/", (req, res) => {
  res.sendFile("/Users/shardulg/Desktop/Node/Day6/index.html");
});
let activeUserList = {};

io.on("connection", (socket) => {
  socket.on("new-user", (name) => {
    console.log(name);
    activeUserList[socket.id] = name;
    io.emit("active-users", Object.values(activeUserList));
  });
  socket.on("private-message", (data) => {
    const recipientSocketId = Object.keys(activeUserList).find(
      (socketId) => activeUserList[socketId] === data.recipient
    );
    if (recipientSocketId) {
      io.to(recipientSocketId).emit("private-message", {
        sender: activeUserList[socket.id],
        message: data.message,
      });
    }
  });
  socket.on("disconnect", () => {
    if (activeUserList[socket.id]) {
      delete activeUserList[socket.id];
      io.emit("active-users", Object.values(activeUserList));
    }
  });
});
server.listen(3000, () => {
  console.log("listening on *:3000");
});
