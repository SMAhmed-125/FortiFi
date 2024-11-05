const Milestone = require('../models/milestoneSchema.js');
const express = require('express');
const milestoneRouter = express.Router();

// Get all milestones for user
milestoneRouter.get('/milestones/:userId', async (req, res) => {
    try {
        const milestones = await Milestone.find({ userId: req.params.userId});

        if (!milestone) {
            return res.status(404).json({ message: `No milestones for user ID ${req.params.userId} found` });
        }

        res.status(200).json(milestones);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving milestones" });
    }
});

// Get milestone by goalId for user
milestoneRouter.get('/milestones/:userId/:goalId', async (req, res) => {
    try {
        const milestone = await Milestone.find(
            { userId: req.params.userId },
            { goalId: req.params.goalId },
        );

        if (!milestone) {
            return res.status(404).json({ message: `No milestone with goal ID ${req.params.goalId} found` });
        }

        res.status(200).json(milestone);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving milestone by goalId" });
    }
});

// Create a new milestone
milestoneRouter.post('/milestones/:userId/:goalId', async (req, res) => {
    const { name, description, targetAmount, deadline } = req.body;

    try {
        const updatedMilestone = await Milestone.findOneAndUpdate(
            { userId: req.params.userId },
            { goalId: req.params.goalId },
            req.body,
            { new: true, upsert: true, runValidators: true },
        );

        if (!updatedMilestone) {
            return res.status(404).json({ message: `No milestone with goal ID ${req.params.goalId} found` });
        }

        res.status(200).json(updatedMilestone);
    } catch (error) {
        res.status(400).json({ message: "Error saving new milestone" });
    }
});

// Update milestone by goalId
milestoneRouter.patch('/milestones/:userId/:goalId', async (req, res) => {
    try {
        const updatedMilestone = await Milestone.findOneAndUpdate(
            { userId: req.params.userId },
            { goalId: req.params.goalId },
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedMilestone) {
            return res.status(404).json({ message: `No milestone with goal ID ${req.params.goalId} found` });
        }

        res.status(200).json(updatedMilestone);
    } catch (error) {
        res.status(400).json({ message: "Error updating milestone" });
    }
});


// Get milestones in sequence order
milestoneRouter.get('/milestones/:userId/:goalId/ordered', async (req, res) => {
    try {
        const milestones = await Milestone.find(
            { userId: req.params.userId },
            { goalId: req.params.goalId },
        ).sort('sequence');
        res.status(200).json(milestones);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving ordered milestones" });
    }
});

// Delete milestone by goalId for a user
milestoneRouter.delete('milestones/:userId/:goalId', async (req, res) => {
    try {
        const milestone = await Milestone.findOneAndDelete(
            { userId: req.params.userId },
            { goalId: req.params.goalId },
        );
        
        if (!milestone) {
            return res.status(404).json({ message: `No milestone with goal ID ${req.params.goalId} found` });
        }

        res.status(200).json({ message: "Milestone successfully deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting milestone" });
    }
});

module.exports = milestoneRouter;
