const express = require('express');
const Budget = require('../models/budgetSchema');
const budgetRouter = express.Router();

// Get all budgets
budgetRouter.get('/', async (req, res) => {
    try {
        const budgets = await Budget.find();
        res.status(200).json(budgets);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving budgets" });
    }
});

// Get a budget summary
budgetRouter.get('/summary', async (req, res) => {
    try {
        const budgets = await Budget.aggregate([
            { $group: { _id: null, totalAmount: { $sum: "$amount" } } }
        ]);
        res.json(budgets[0] || { totalAmount: 0 });
    } catch (error) {
        res.status(500).json({ message: "Error calculating summary" });
    }
});

// Create or replace a budget
budgetRouter.put('/:id', async (req, res) => {
    try {
        const updatedBudget = await Budget.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, upsert: true }
        );
        res.status(200).json(updatedBudget);
    } catch (error) {
        res.status(400).json({ message: "Error updating budget" });
    }
});

// Update budget by fields
budgetRouter.patch('/:id', async (req, res) => {
    try {
        const budget = await Budget.findById(req.params.id);
        if (!budget) return res.status(404).json({ message: 'Budget not found' });

        Object.keys(req.body).forEach((field) => {
            if (field in budget) budget[field] = req.body[field];
        });
        const updatedBudget = await budget.save();
        res.status(200).json(updatedBudget);
    } catch (error) {
        res.status(400).json({ message: "Error updating budget" });
    }
});

// Delete a budget by ID
budgetRouter.delete('/:id', async (req, res) => {
    try {
        await Budget.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Error deleting budget" });
    }
});

module.exports = budgetRouter;
