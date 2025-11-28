const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');

// @route   POST api/auth/signup
// @desc    Register user
// @access  Public
router.post('/signup', async (req, res) => {
    console.log('----------------------------------------');
    console.log('SIGNUP ATTEMPT RECEIVED');
    console.log('Body:', JSON.stringify(req.body, null, 2));

    const { username, email, password } = req.body;

    // Validation
    if (!username || !email || !password) {
        console.log('SIGNUP FAILED: Missing fields');
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        // Check for existing user
        console.log('Checking if user exists:', email);
        let user = await User.findOne({ email });

        if (user) {
            console.log('SIGNUP FAILED: User already exists');
            return res.status(400).json({ msg: 'User already exists' });
        }

        console.log('Creating new user instance...');
        user = new User({
            username,
            email,
            password
        });

        // Hash password
        console.log('Hashing password...');
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        console.log('Saving user to database...');
        await user.save();
        console.log('User saved successfully. ID:', user.id);

        // Create token
        const payload = {
            user: {
                id: user.id
            }
        };

        console.log('Generating JWT...');
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) {
                    console.error('JWT Generation Error:', err);
                    throw err;
                }
                console.log('JWT Generated. Sending response.');
                res.json({
                    token,
                    user: {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        xp: user.xp,
                        level: user.level,
                        badges: user.badges
                    }
                });
            }
        );
    } catch (err) {
        console.error('SIGNUP SERVER ERROR:', err.message);
        console.error(err);
        res.status(500).send('Server error');
    }
});

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', async (req, res) => {
    console.log('----------------------------------------');
    console.log('LOGIN ATTEMPT RECEIVED');
    console.log('Email:', req.body.email);

    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
        console.log('LOGIN FAILED: Missing fields');
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        // Check for user
        let user = await User.findOne({ email });

        if (!user) {
            console.log('LOGIN FAILED: User not found');
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            console.log('LOGIN FAILED: Invalid password');
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                console.log('Login successful. Sending token.');
                res.json({
                    token,
                    user: {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        xp: user.xp,
                        level: user.level,
                        badges: user.badges
                    }
                });
            }
        );
    } catch (err) {
        console.error('LOGIN SERVER ERROR:', err.message);
        res.status(500).send('Server error');
    }
});

// @route   GET api/auth/user
// @desc    Get logged in user
// @access  Private
router.get('/user', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
