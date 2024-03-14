import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('MongoDB connection SUCCESS');
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export default connectDB;
