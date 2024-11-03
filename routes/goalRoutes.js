const Goal = require('../models/goalSchema.js');
const express = require('express');
const goalRouter = express.Router();

goalRouter.get('/', async (req, res) => {
    try {
        const goals = await Goal.find();
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving goals" });
    }
});

goalRouter.get('/:id', async (req, res) => {
    try {
        const userGoals = await Goal.findById(req.params.id);

        if(!userGoals) {
            res.status(404).json({ message: "No goals exist for user"});
        }

        res.json(userGoals);
    } catch (error) {
        res.status(400).json({ message: "getGoalsById failed"});
    }
});

goalRouter.get('/:id/progress', async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        if (!goal) return res.status(404).json({ message: 'Goal not found' });
        const progress = goal.targetAmount ? (goal.currentAmount / goal.targetAmount) * 100 : 0;
        res.json({ progress: `${progress}%` });
    } catch (error) {
        res.status(500).json({ message: "Error calculating progress" });
    }
});

goalRouter.post('/', async (req, res) => {

    const goal = new Goal({
        userId: req.body.userId,
        name: req.body.name,
        targetAmount: req.body.targetAmount,
        currentAmount: req.body.currentAmount,
        startDate: req.body.startDate,
        targetDate: req.body.targetDate,
        priorityLevel: req.body.priorityLevel,
    });

    try {
        const newGoal = await goal.save();
        res.status(201).json(newGoal);
    } catch(error) {
        res.status(400).json({ message: "saveNewGoals failed"});
    }
});

goalRouter.patch('/:id', async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);

        if (!goal) {
            res.status(404).json({ message: "Could not find goal."});
        }
        Object.keys(req.body).forEach(field => goal[field] = req.body[field]);
        const updatedGoal = await goal.save();
        res.json(updatedGoal);
    } catch (error) {
        res.status(400).json({ message: "updateGoal failed"});
    }
});

goalRouter.delete('/:id', async (req, res) => {
    try {
        const goal = await Goal.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Error deleting goal" });
    }
})

module.exports = goalRouter;