const experess = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoute');

const app = experess();
dotenv.config();


//variables
const PORT = process.env.PORT || 5001;

// Connect to database
connectDB();

// Middleware
app.use(cors(
        process.env.NODE_ENV === 'development' 
        ? { origin: ['http://localhost:5173','http://localhost:5174'], credentials: true } 
        : { origin: 'https://webpulsecheck.com', credentials: true }));
app.use(experess.json());
app.use(cookieParser())



// default route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Routes
app.use('/api/users', userRoutes);


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
