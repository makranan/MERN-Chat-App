import path from 'path';
import { app, io, server } from './socket/socket.js';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectDB from './db/connect.db.js';
dotenv.config();

const PORT = process.env.PORT;

const __dirname = path.resolve();

app.use(express.json()); // to parse incoming requests with JSON payloads
app.use(cookieParser()); // to parse incoming requests with cookies

app.use('/api/auth', authRoutes); // use authRoutes for /api/auth
app.use('/api/messages', messageRoutes); // use messageRoutes for /api/messages
app.use('/api/users', userRoutes); // use userRoutes for /api/users

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
