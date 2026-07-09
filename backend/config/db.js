const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoUris = [process.env.MONGODB_URI, 'mongodb://127.0.0.1:27017/medimeet'].filter(Boolean);

  for (const uri of mongoUris) {
    try {
      await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      });
      console.log('MongoDB is connected');
      return true;
    } catch (error) {
      console.warn(`MongoDB connection failed for ${uri}: ${error.message}`);
    }
  }

  console.warn('MongoDB is unavailable. The server will continue without a database connection.');
  return false;
};

module.exports = connectDB;
