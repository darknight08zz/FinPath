const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config(); // Fallback to default if needed

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// DB Config
const db = process.env.MONGO_URI;

if (!db) {
    console.error('CRITICAL ERROR: MONGO_URI is not defined in environment variables.');
}

// Connect to MongoDB
const connectDB = async () => {
    try {
        console.log('Attempting to connect to MongoDB...');
        console.log('URI:', db.replace(/:([^:@]+)@/, ':****@')); // Log URI with hidden password

        await mongoose.connect(db);

        console.log('MongoDB Connected successfully');
    } catch (err) {
        console.error('MongoDB Connection Error:', err.message);
        console.error('Full Error:', err);
        console.error('Make sure your IP is whitelisted in MongoDB Atlas and MONGO_URI is correct.');
        // process.exit(1); // Optional: Exit if DB fails
    }
};

connectDB();

// Routes
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date(),
        mongoConnection: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));

const PORT = process.env.PORT || 5000;

if (require.main === module) {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

module.exports = app;
