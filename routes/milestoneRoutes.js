const Milestone = require('../models/milestoneSchema.js');
const express = require('express');
const milestoneRouter = express.Router();

// Get all milestones
milestoneRouter.get('/', async (req, res) => {
    try {
        const milestones = await Milestone.find();
        res.status(200).json(milestones);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving milestones" });
    }
});

// Get milestone by goalId
milestoneRouter.get('/:goalId', async (req, res) => {
    try {
        const milestone = await Milestone.findOne({ goalId: req.params.goalId });

        if (!milestone) {
            return res.status(404).json({ message: `No milestone with goal ID ${req.params.goalId} found` });
        }

        res.status(200).json(milestone);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving milestone by goalId" });
    }
});

// Create a new milestone
milestoneRouter.post('/', async (req, res) => {
    const { name, description, targetAmount, deadline } = req.body;

    const milestone = new Milestone({
        name,
        description,
        targetAmount,
        deadline,
    });

    try {
        const newMilestone = await milestone.save();
        res.status(201).json(newMilestone);
    } catch (error) {
        res.status(400).json({ message: "Error saving new milestone" });
    }
});

// Update milestone by goalId
milestoneRouter.patch('/:goalId', async (req, res) => {
    try {
        const updatedMilestone = await Milestone.findOneAndUpdate(
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
milestoneRouter.get('/ordered', async (req, res) => {
    try {
        const milestones = await Milestone.find().sort('sequence');
        res.status(200).json(milestones);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving ordered milestones" });
    }
});

// Delete milestone by goalId
milestoneRouter.delete('/:goalId', async (req, res) => {
    try {
        const milestone = await Milestone.findOneAndDelete({ goalId: req.params.goalId });
        
        if (!milestone) {
            return res.status(404).json({ message: `No milestone with goal ID ${req.params.goalId} found` });
        }

        res.status(200).json({ message: "Milestone successfully deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting milestone" });
    }
});

module.exports = milestoneRouter;
