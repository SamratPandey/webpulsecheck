const mongoose = require('mongoose');


const connectDB = async () => {
   try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME || 'webpulsecheck',
        }).then(() => {
            console.log('MongoDB connected');
        }).catch((err) => {
            console.error('MongoDB connection error:', err);
            process.exit(1);
        });
   } catch (error) {
    console.error('Error connecting to MongoDB:', error);
   }
}

module.exports = connectDB;