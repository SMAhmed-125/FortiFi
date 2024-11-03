const Milestone = require('../models/milestoneSchema.js');
const express = require('express');
const milestoneRouter = express.Router();


milestoneRouter.get('/', async (req, res) => {
    try {
        const milestones = await Milestone.find();
        res.json(milestones);
    } catch (error) {
        res.status(400).json({ message: "getMilestones failed"});
    }
});

milestoneRouter.get('/:id', async (req, res) => {
    try {
        const milestone = await Milestone.findById(req.params.id);

        if(!milestone) {
            return res.status(404).json({ message: `No milestone with ID ${req.params.id} exists for user` });
        }

        res.json(milestone);
    } catch (error) {
        res.status(400).json({ message: "getMilestonesById failed"});
    }
});

milestoneRouter.post('/', async (req, res) => {

    const milestone = new Milestone({
        name: req.body.name,
        description: req.body.description,
        targetAmount: req.body.targetAmount,
        deadline: req.body.deadline,
    });

    try {
        const newMilestone = await milestone.save();
        res.status(201).json(newMilestone);
    } catch(error) {
        res.status(400).json({ message: "saveNewMilestone failed" });
    }
});

milestoneRouter.patch('/:id', async (req, res) => {
    try {
        const milestone = await Milestone.findById(req.params.id);

        if (!milestone) {
            return res.status(404).json({ message: `No milestone with ID ${req.params.id} exists for user` });
        }
        Object.keys(req.body).forEach((field) => {
            if (field in milestone) milestone[field] = req.body[field];
        });
        const updatedMilestone = await milestone.save();
        res.json(updatedMilestone);
    } catch (error) {
        res.status(400).json({ message: "updateMilestone failed"});
    }
});

milestoneRouter.patch('/:id/complete', async (req, res) => {
    try {
        const milestone = await Milestone.findById(req.params.id);
        if (!milestone) return res.status(404).json({ message: 'Milestone not found' });

        milestone.isCompleted = true;
        const updatedMilestone = await milestone.save();
        res.status(200).json(updatedMilestone);
    } catch (error) {
        res.status(500).json({ message: "Error marking milestone as completed" });
    }
});

// Get milestones with sequence order
milestoneRouter.get('/ordered', async (req, res) => {
    try {
        const milestones = await Milestone.find().sort('sequence');
        res.status(200).json(milestones);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving milestones" });
    }
});

milestoneRouter.delete('/:id', async (req, res) => {
    try {
        const milestone = await Milestone.findByIdAndDelete(req.params.id);
        res.json( { message: "Successfully deleted milestone" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting milestone." });
    }
})


module.exports = milestoneRouter;