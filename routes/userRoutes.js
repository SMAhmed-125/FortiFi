const express = require('express');
const User = require('../models/userSchema.js');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Get all users
userRouter.get('/', async (req, res) => {

    try {
        const users = await User.find();
        res.json(users);
    } catch(error) {
        res.status(500).json({ message : "error in getting all users"});
    }
});

// Get user by Id
userRouter.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "cannot find user to update" });
        }
        res.json(user);
    } catch(error) {
        res.status(400).json({ message: "error in getting user by id"});
    }
});

// Update a user
userRouter.patch('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "cannot find user to update" });
        }
        const { passwordHash, ...updates } = req.body;
        Object.keys(updates).forEach(field => user[field] = updates[field]);
        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: "error in updating existing user" });
    }
});

// Delete a user
userRouter.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json({ message: "deleted user successfully"});
    } catch (error) {
        res.status(400).json({ message: "error in deleting existing user" });
    }
});

// Create a user with hashed password
userRouter.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            ...req.body,
            passwordHash: hashedPassword
        });
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: "Error registering user" });
    }
});

// Let an existing user login
userRouter.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || !await bcrypt.compare(req.body.password, user.passwordHash)) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in" });
    }
});


module.exports = userRouter;
