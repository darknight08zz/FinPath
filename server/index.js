const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

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
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected successfully'))
    .catch(err => {
        console.error('MongoDB Connection Error:', err);
        console.error('Make sure your IP is whitelisted in MongoDB Atlas and MONGO_URI is correct.');
    });

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
