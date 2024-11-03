const SavingsPlan = require('../models/savingsPlanSchema.js');
const express = require('express');
const savingsPlanRouter = express.Router();


savingsPlanRouter.get('/', async (req, res) => {
    try {
        const savingsPlans = await SavingsPlan.find();
        res.json(savingsPlans);
    } catch (error) {
        res.status(400).json({ message: "getSavingsPlans failed"});
    }
});

savingsPlanRouter.get('/:id', async (req, res) => {
    try {
        const savingsPlan = await SavingsPlan.findById(req.params.id);

        if(!savingsPlan) {
            res.status(404).json({ message: `No savingsPlan with ID ${req.params.id} exists for user` });
        }

        res.json(savingsPlan);
    } catch (error) {
        res.status(400).json({ message: "getSavingsPlansById failed"});
    }
});

savingsPlanRouter.post('/', async (req, res) => {

    const savingsPlan = new SavingsPlan({
        goalId: req.body.goalId,
        frequency: req.body.frequency,
        amount: req.body.amount,
        startDate: req.body.startDate,
        nextContributionDate: req.body.nextContributionDate,
    });

    try {
        const newSavingsPlan = await savingsPlan.save();
        res.status(201).json(newSavingsPlan);
    } catch(error) {
        res.status(400).json({ message: "saveNewSavingsPlan failed" });
    }
});

savingsPlanRouter.patch('/:id', async (req, res) => {
    try {
        const savingsPlan = await SavingsPlan.findById(req.params.id);

        if (!savingsPlan) {
            res.status(404).json({ message: `No savingsPlan with ID ${req.params.id} exists for user` });
        }
        Object.keys(req.body).forEach(field => savingsPlan.field = req.body.field);
        const updatedSavingsPlan = await savingsPlan.save();
        res.json(updatedSavingsPlan);
    } catch (error) {
        res.status(400).json({ message: "Error updating savings plan."});
    }
});

savingsPlanRouter.delete('/:id', async (req, res) => {
    try {
        const savingsPlan = await SavingsPlan.findByIdAndDelete(req.params.id);
        res.json( { message: "Successfully deleted savings plan." });
    } catch (error) {
        res.status(500).json({ message: "Error deleting savings plan." });
    }
});

// Track progress toward savings goal
savingsPlanRouter.get('/:id/progress', async (req, res) => {
    try {
        const plan = await SavingsPlan.findById(req.params.id);
        if (!plan) return res.status(404).json({ message: 'Savings plan not found.' });

        const progress = (plan.currentAmount / plan.targetAmount) * 100;
        res.json({ progress: `${progress}%` });
    } catch (error) {
        res.status(500).json({ message: "Error calculating savings progress." });
    }
});


module.exports = savingsPlanRouter;