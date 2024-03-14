import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import connectDB from './db/connect.db.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // to parse incoming requests with JSON payloads

app.use('/api/auth', authRoutes); // use authRoutes for /api/auth

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
