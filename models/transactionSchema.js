const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    goalId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'goal',
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    amount: {
        type: Number,
        required: true,
        validate: {
            validator: value => value >= 0,
            message: props => `${props.value} cannot be negative!`,
        },  
    },
    transactionType: {
        type: String,
        enum: ["deposit", "withdrawal"],
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
        minLength: [5, 'Too short'],
        maxLength: [50, 'Too long'],
    },

})

const transaction = mongoose.model('transaction', transactionSchema);
module.exports = transaction;