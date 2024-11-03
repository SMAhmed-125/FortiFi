const Notification = require('../models/notificationSchema.js');
const express = require('express');
const notificationRouter = express.Router();
const cron = require('node-cron');


notificationRouter.get('/', async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.json(notifications);
    } catch (error) {
        res.status(400).json({ message: "getNotifications failed"});
    }
});

notificationRouter.get('/:userId', async (req, res) => {
    try {
        const notification = await Notification.findOne({ userId: req.params.userId });

        if(!notification) {
            return res.status(404).json({ message: `No notification with ID ${req.params.userId} exists for user` });
        }

        res.json(notification);
    } catch (error) {
        res.status(400).json({ message: "getNotificationsById failed"});
    }
});

notificationRouter.get('/:userId/:goalId', async (req, res) => {
    try {
        const notification = await Notification.findOne({
            userId: req.params.userId,
            goalId: req.params.goalId
        });

        if (!notification) {
            return res.status(404).json({ message: `No notification found for user ID ${req.params.userId} and goal ID ${req.params.goalId}` });
        }

        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving notification by userId and goalId" });
    }
});

notificationRouter.get('/:goalId', async (req, res) => {
    try {
        const notification = await Notification.findOne({ goalId: req.params.goalId });

        if(!notification) {
            return res.status(404).json({ message: `No notification with ID ${req.params.goalId} exists for user` });
        }

        res.json(notification);
    } catch (error) {
        res.status(400).json({ message: "getNotificationsBygoalId failed"});
    }
});

notificationRouter.post('/', async (req, res) => {

    const notification = new Notification({
        userId: req.body.userId,
        goalId: req.body.goalId,
        notificationType: req.body.notificationType,
        dateScheduled: req.body.dateScheduled,
        message: req.body.message,
    });

    try {
        const newNotification = await notification.save();
        res.status(201).json(newNotification);
    } catch(error) {
        res.status(400).json({ message: "saveNewNotification failed" });
    }
});

// Update notification by userId and goalId
notificationRouter.patch('/:userId/:goalId', async (req, res) => {
    const allowedUpdates = ['notificationType', 'dateScheduled', 'message'];
    const updates = {};

    // Filter req.body to only allow specific fields to be updated
    Object.keys(req.body).forEach((key) => {
        if (allowedUpdates.includes(key)) {
            updates[key] = req.body[key];
        }
    });

    try {
        const updatedNotification = await Notification.findOneAndUpdate(
            { userId: req.params.userId, goalId: req.params.goalId },
            updates,
            { new: true, runValidators: true }
        );

        if (!updatedNotification) {
            return res.status(404).json({ message: `No notification found for user ID ${req.params.userId} and goal ID ${req.params.goalId}` });
        }

        res.status(200).json(updatedNotification);
    } catch (error) {
        res.status(400).json({ message: "Error updating notification", error });
    }
});

notificationRouter.delete('/:userId/:goalId', async (req, res) => {
    try {
        const notification = await Notification.findOneAndDelete({
            userId: req.params.userId,
            goalId: req.params.goalId
        });

        if (!notification) {
            return res.status(404).json({ message: `No notification found for user ID ${req.params.userId} and goal ID ${req.params.goalId}` });
        }

        res.status(200).json({ message: "Successfully deleted notification" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting notification", error });
    }
});

// Schedule a notification for a specific date
notificationRouter.post('/schedule', async (req, res) => {
    try {
        const notification = new Notification(req.body);
        await notification.save();

        const date = new Date(notification.dateScheduled);
        const cronExpression = `${date.getMinutes()} ${date.getHours()} ${date.getDate()} ${date.getMonth() + 1} *`;
        
        const job = cron.schedule(cronExpression, () => {
            console.log(`Sending notification: ${notification.message}`);
        }, {
            scheduled: true
        });
        
        res.status(201).json({ message: 'Notification scheduled', jobId: job });
    } catch (error) {
        res.status(400).json({ message: "Error scheduling notification", error });
    }
});

// Bulk delete notifications by scheduled date
notificationRouter.delete('/batch', async (req, res) => {
    try {
        const result = await Notification.deleteMany({ dateScheduled: { $lte: req.body.date } });
        res.status(200).json({ message: `${result.deletedCount} notifications deleted` });
    } catch (error) {
        res.status(500).json({ message: "Error deleting notifications", error });
    }
});


module.exports = notificationRouter;