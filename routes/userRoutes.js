const express = require('express');
const User = require('../models/userSchema.js');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

userRouter.get('/', async (req, res) => {
    // Get all users
    try {
        const users = await User.find();
        res.json(users);
    } catch(error) {
        res.status(500).json({ message : "error in getting all users"});
    }
});

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

userRouter.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        passwordHash: req.body.passwordHash,
    });

    try{
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: "error in saving new user" });
    }
});

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

userRouter.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json({ message: "deleted user successfully"});
    } catch (error) {
        res.status(400).json({ message: "error in deleting existing user" });
    }
});

// User registration with password hashing
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

// User login and JWT generation
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
