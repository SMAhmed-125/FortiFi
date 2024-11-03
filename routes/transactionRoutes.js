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
            res.status(404).json({ message: "No transactions exist for user"});
        }

        res.json(transaction);
    } catch (error) {
        res.status(400).json({ message: "getTransactionsById failed"});
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

transactionRouter.delete('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        res.json( { message: "successfully deleted transaction" });
    } catch (error) {
        res.status(500).json({ message: "deleteTransaction failed" });
    }
})

transactionRouter.get('/summary', async (req, res) => {
    try {
        const summary = await Transaction.aggregate([
            { $group: { _id: "$transactionType", totalAmount: { $sum: "$amount" } } }
        ]);
        res.json(summary);
    } catch (error) {
        res.status(500).json({ message: "Error calculating transaction summary" });
    }
});


module.exports = transactionRouter;