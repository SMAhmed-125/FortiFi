const mongoose = require('mongoose');

const milestoneSchema = mongoose.Schema({
    goalId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'goal',
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Be specific about your goals'],
    },
    targetAmount: {
        type: Number,
        required: true,
        validate: {
            validator: value => value >= 0,
            message: props => `${props.value} cannot be negative!`,
        },
    },
    deadline: {
        type: Date,
        required: true,
    }
})

const milestone = mongoose.model('milestone', milestoneSchema);
module.export = milestone;