import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    //  TODO: Add the origin and method properties to the cors object
    origin: 'http://localhost:5173',
    method: ['GET', 'POST'],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {};

io.on('connection', (socket) => {
  console.log('a user connected, socket id:', socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != undefined) userSocketMap[userId] = socket.id;

  io.emit('getOnlineStatus', Object.keys(userSocketMap));

  socket.on('disconnect', () => {
    console.log('user disconnected, socket id:', socket.id);
    delete userSocketMap[userId];
    io.emit('getOnlineStatus', Object.keys(userSocketMap));
  });
});

export { app, io, server };
