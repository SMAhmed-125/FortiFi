const Goal = require('../models/goalSchema.js');
const express = require('express');
const goalRouter = express.Router();


// get all progress for all goals for a user
goalRouter.get('/goals/:userId/progress', async (req, res) => {
    try {
        const goal = await Goal.find({ userId: req.params.userId});
        if (!goal) return res.status(404).json({ message: 'Goal not found' });
        const progress = goal.targetAmount ? (goal.currentAmount / goal.targetAmount) * 100 : 0;
        res.json({ progress: `${progress}%` });
    } catch (error) {
        res.status(500).json({ message: "Error calculating progress" });
    }
});

// get all goals for a user
goalRouter.get('/goals/:userId', async (req, res) => {
    try {
        const userGoals = await Goal.find({ userId: req.params.userId});

        if(!userGoals) {
            return res.status(404).json({ message: "No goals exist for user"});
        }

        res.json(userGoals);
    } catch (error) {
        res.status(400).json({ message: "getGoalsById failed"});
    }
});

goalRouter.post('/goals/:userId', async (req, res) => {

    const { name, targetAmount, currentAmount, startDate, targetDate, priorityLevel } = req.body;

    const goal = new Goal({
        userId: req.params.userId,
        name,
        targetAmount,
        currentAmount,
        startDate,
        targetDate,
        priorityLevel,
    });

    try {
        const newGoal = await goal.save();
        res.status(201).json(newGoal);
    } catch(error) {
        res.status(400).json({ message: "saveNewGoals failed"});
    }
});

goalRouter.patch('/goals/:userId', async (req, res) => {
    try {
        const updatedGoal = await Goal.findOneAndUpdate(
            { userId: req.params.userId },
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedGoal) {
            return res.status(404).json({ message: "Goal not found." });
        }

        res.status(200).json(updatedGoal);
    } catch (error) {
        res.status(400).json({ message: "Error updating goal" });
    }
});

goalRouter.delete('/goals/:userId', async (req, res) => {
    try {
        const goal = await Goal.findOneAndDelete({ userId: req.params.userId });
        res.status(200).send();
    } catch (error) {
        res.status(500).json({ message: "Error deleting goal" });
    }
})

module.exports = goalRouter;