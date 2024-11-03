const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    goalId: {
        typeof: mongoose.Types.ObjectId,
        required: true,
        ref: 'goal',
    },
    notificationType: {
        typeof: String,
        enum: ["in-app", "text", "call", "email"],
        required: true,
    },
    dateScheduled: {
        typeof: Date,
        required: true,
    },
    message: {
        typeof: String,
    },
})

const notification = mongoose.model('notification', notificationSchema);
module.exports = notification;