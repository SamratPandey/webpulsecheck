const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userSchema = require('../schema/user');
const cookieParser = require('cookie-parser');

// Register a new user
exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    const parseData = userSchema.safeParse({ username, email, password });
    if (!parseData.success) {
        return res.status(400).json({ message: 'Invalid input', errors: parseData.error.errors });
    }
    
    try {
        let user = await userModel.find({ $or: [{ email }, { username }] });
        if (user.length) {
            return res.status(400).json({ message: 'User already exists' });
        }
        
        user = new userModel({ username, email, password });
        await user.save();
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie(
            'token',
            token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        })
        res.status(201).json({ message: 'User registered successfully', user: { username } });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Login a user
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '1h' });
        res.cookie(
            'token',
            token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        })
        res.status(201).json({ message: 'User Login successfully', userId:  user._id });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
