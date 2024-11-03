require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('./middlewares/passportConfig'); // Google OAuth middleware
const authenticateToken = require('./middlewares/authMiddleware'); // JWT middleware

// Import route files
const budgetRoutes = require('./routes/budgetRoutes');
const goalRoutes = require('./routes/goalRoutes');
const milestoneRoutes = require('./routes/milestoneRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const savingsPlanRoutes = require('./routes/savingsPlanRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 4000;
const dbURI = process.env.DB_URI;

// Middleware
app.use(cors());
app.use(express.json()); 
app.use(passport.initialize());

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Connect routes
app.use('/api/budgets', budgetRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/milestones', milestoneRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/savings-plans', savingsPlanRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/users', userRoutes);

// Google OAuth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/'); 
    }
);

// Root route
app.get('/', (req, res) => {
    res.status(200).send("Connected to server successfully!");
});

// Connect to MongoDB and start the server
mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    })
    .catch((error) => console.error('Failed to connect to MongoDB', error));


