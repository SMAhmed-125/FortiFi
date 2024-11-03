const { default: mongoose } = require('mongoose');
const Transaction = require('../models/transactionSchema.js');
const express = require('express');
const transactionRouter = express.Router();


transactionRouter.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        res.status(400).json({ message: "getTransactions failed"});
    }
});

transactionRouter.get('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction) {
            return res.status(404).json({ message: "No transactions exist for user"});
        }

        res.json(transaction);
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

transactionRouter.get('/:userId/:goalId', async (req, res) => {
    try {
        const transaction = await Transaction.findOne({
            userId: req.params.userId,
            goalId: req.params.goalId
        });

        if (!transaction) {
            return res.status(404).json({ message: `No transaction found for user ID ${req.params.userId} and goal ID ${req.params.goalId}` });
        }

        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving transaction by userId and goalId" });
    }
});

transactionRouter.post('/', async (req, res) => {

    const transaction = new Transaction({
        goalId: req.body.goalId,
        userId: req.body.userId,
        amount: req.body.amount,
        currentAmount: req.body.currentAmount,
        transactionType: req.body.transactionType,
        date: req.body.date,
        description: req.body.description,
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
        res.json( { message: "successfully deleted transaction" });
    } catch (error) {
        res.status(500).json({ message: "deleteTransaction failed" });
    }
})


module.exports = transactionRouter;