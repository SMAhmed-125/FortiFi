const express = require('express');
const User = require('../models/userSchema.js');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Get user by Id
userRouter.get('/users/:userId', async (req, res) => {
    try {
        const user = await User.findOne({ userId: req.params.userId });
        if (!user) {
            return res.status(404).json({ message: "cannot find user to update" });
        }
        res.status(200).json(user);
    } catch(error) {
        res.status(400).json({ message: "error in getting user by userId"});
    }
});

// Update a user
userRouter.patch('/users/:userId', async (req, res) => {
    updates = {};

    Object.keys(req.body).forEach((key) => {
        if ('email'.includes(key)) {
            updates[key] = req.body[key];
        }
    });

    try {
        const updatedUser = await User.findOneAndUpdate(
            { userId: req.params.userId },
            updates,
            { new: true, runValidators: true},
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "cannot find user to update" });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: "error in updating existing user" });
    }
});

// Delete a user
userRouter.delete('/users/:userId', async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ userId: req.params.userId });;
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: "error in deleting existing user" });
    }
});

// Create a user with hashed password
userRouter.post('/users/register', async (req, res) => {
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
userRouter.post('/users/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || !await bcrypt.compare(req.body.password, user.passwordHash)) {
            return res.status(401).json({ message: "InvaluserId credentials" });
        }
        const token = jwt.sign({ userId: user._userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in" });
    }
});


module.exports = userRouter;
