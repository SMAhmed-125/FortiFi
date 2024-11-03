const mongoose = require('mongoose');


const goalSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    name: {
        type: String,
        required: true,
    },
    targetAmount: {
        type: Number,
        required: true,
    },
    currentAmount: {
        type: Number,
        required: true,
        validate: {
            validator: value => value >= 0,
            message: props => `${props.value} cannot be negative!`,
        },        
    },
    startDate: {
        type: Date,
        required: true,
    },
    targetDate: {
        type: Date,
        required: true,
    },
    priorityLevel: {
        type: String,
        enum: ["low", "medium", "high"],
        required: true,
    }
})

const goal = mongoose.model('goal', goalSchema);
module.exports = goal;