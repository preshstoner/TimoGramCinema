const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

//Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json()); //Parse JSON bodies

//MongoDb Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1); //Exit with failure
  }
};

connectDB();

//Basic test route
app.get('/', (req, res) => {
    res.json({message: 'Welcome to TimoGramCinema Backend API'});
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/movies', require('./routes/movieRoutes'));

//TODO: Import and use routes later. app.use('/api/auth', require('./routes/authRoutes')); app.use('api/bookings', require('./routes/bookingRoutes'));

//Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});