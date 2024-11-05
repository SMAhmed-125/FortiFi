const { default: mongoose } = require('mongoose');
const Transaction = require('../models/transactionSchema.js');
const express = require('express');
const transactionRouter = express.Router();

transactionRouter.get('/:userId', async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.params.userId });

        res.status(200).json(transactions);
    } catch (error) {
        res.status(400).json({ message: "getTransactionsById failed"});
    }
});

transactionRouter.get('/:userId/:goalId', async (req, res) => {
    try {
        const transactions = await Transaction.find(
            { userId: req.params.userId },
            { goalId: req.params.goalId },
        );

        res.status(200).json(transactions);
    } catch (error) {
        res.status(400).json({ message: "getTransactionsById failed"});
    }
});

transactionRouter.get('/:userId/:goalId/summary', async (req, res) => {
    try {
        const summary = await Transaction.aggregate([
            { $match: { userId: mongoose.Types.ObjectId(req.params.userId) }, goalId: mongoose.Types.ObjectId(req.params.goalId) },
            { $group: { _id: "$transactionType", totalAmount: { $sum: "$amount" } } },
            { $group: { _id: "$date", totalAmount: { $sum: "$amount" }  } },
        ]);
        res.json(summary.length ? summary : [{ _id: "none", totalAmount: 0 }]);
    } catch (error) {
        res.status(500).json({ message: "Error calculating transaction summary" });
    }
});

transactionRouter.get('/:userId/summary', async (req, res) => {
    try {
        const summary = await Transaction.aggregate([
            { $match: { userId: mongoose.Types.ObjectId(req.params.userId) } },
            { $group: { _id: "$transactionType", totalAmount: { $sum: "$amount" } } },
            { $group: { _id: "$date", totalAmount: { $sum: "$amount" }  } },
        ]);
        res.json(summary.length ? summary : [{ _id: "none", totalAmount: 0 }]);
    } catch (error) {
        res.status(500).json({ message: "Error calculating transaction summary" });
    }
});


transactionRouter.post('/:userId/:goalId', async (req, res) => {
    const { amount, currentAmount, transactionType, date, description } = req.body;

    const transaction = new Transaction({
        goalId: req.params.goalId,
        userId: req.params.userId,
        amount,
        currentAmount,
        transactionType,
        date,
        description,
    });

    try {
        const newTransaction = await transaction.save();
        res.json(newTransaction);
    } catch(error) {
        res.status(400).json({ message: "saveNewTransaction failed"});
    }
});

transactionRouter.delete('/:userId/:goalId', async (req, res) => {
    try {
        const transaction = await Transaction.findOneAndDelete(
            { userId: req.params.userId},
            { goalId: req.params.goalId}
        );
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: "deleteTransaction failed" });
    }
})


module.exports = transactionRouter;