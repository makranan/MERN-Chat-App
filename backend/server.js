import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectDB from './db/connect.db.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // to parse incoming requests with JSON payloads
app.use(cookieParser()); // to parse incoming requests with cookies

app.use('/api/auth', authRoutes); // use authRoutes for /api/auth
app.use('/api/messages', messageRoutes); // use messageRoutes for /api/messages
app.use('/api/users', userRoutes); // use userRoutes for /api/users

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
