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

// Get budgets for a specific user
budgetRouter.get('/:userId', async (req, res) => {
    try {
        const budgets = await Budget.findOne({ userId: req.params.userId });
        res.status(200).json(budgets);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving budgets" });
    }
});

// Get a budget summary grouped by categories
budgetRouter.get('/:userId/summary', async (req, res) => {
    try {
        const budgets = await Budget.aggregate([
            { $match: { userId: mongoose.Types.ObjectId(req.params.userId) } },
            { $unwind: "$budgetCategories" }, // Breaks down each category into separate documents
            {
                $group: {
                    _id: { userId: "$userId", category: "$budgetCategories" },
                    totalIncome: { $sum: "$monthlyIncome" },
                    totalExpenses: { $sum: "$monthlyExpenses" },
                    incomeExpenseDifference: { $sum: { $subtract: ["$monthlyIncome", "$monthlyExpenses"] } }
                }
            },
            {
                $group: {
                    _id: "$_id.userId",
                    categories: {
                        $push: {
                            category: "$_id.category",
                            totalIncome: "$totalIncome",
                            totalExpenses: "$totalExpenses",
                            incomeExpenseDifference: "$incomeExpenseDifference"
                        }
                    }
                }
            }
        ]);

        res.json(budgets[0] || { categories: [] });
    } catch (error) {
        res.status(500).json({ message: "Error calculating summary" });
    }
});


// Create or replace a budget
budgetRouter.put('/:userId', async (req, res) => {
    try {
        const updatedBudget = await Budget.findOneAndUpdate(
            { userId: req.params.userId },
            req.body,
            { new: true, runValidators: true},
        );
        res.status(200).json(updatedBudget);
    } catch (error) {
        res.status(400).json({ message: "Error updating budget" });
    }
});

// Update budget by fields
budgetRouter.patch('/:userId', async (req, res) => {
    try {
        const updatedBudget = await Budget.findOne(
            { userId: req.params.userId },
            req.body,
            { new: true, runValidators: true},
        );

        if (!updatedBudget) return res.status(404).json({ message: 'Budget not found' });

        res.status(200).json(updatedBudget);
    } catch (error) {
        res.status(400).json({ message: "Error updating budget" });
    }
});

// Delete a budget by ID
budgetRouter.delete('/:userId', async (req, res) => {
    try {
        await Budget.findOneAndDelete({ userId: req.params.userId });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Error deleting budget" });
    }
});

module.exports = budgetRouter;
