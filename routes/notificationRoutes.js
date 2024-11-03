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

notificationRouter.get('/:id', async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);

        if(!notification) {
            return res.status(404).json({ message: `No notification with ID ${req.params.id} exists for user` });
        }

        res.json(notification);
    } catch (error) {
        res.status(400).json({ message: "getNotificationsById failed"});
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

notificationRouter.patch('/:id', async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);

        if (!notification) {
            return res.status(404).json({ message: `No notification with ID ${req.params.id} exists for user` });
        }

        Object.keys(req.body).forEach((field) => {
            if (field in notification) notification[field] = req.body[field];
        });
        const updatedNotification = await notification.save();
        res.json(updatedNotification);
    } catch (error) {
        res.status(400).json({ message: "updateNotification failed"});
    }
});

notificationRouter.delete('/:id', async (req, res) => {
    try {
        const notification = await Notification.findByIdAndDelete(req.params.id);
        res.json( { message: "Successfully deleted notification" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting notification." });
    }
})

// Schedule a notification for a specific date
notificationRouter.post('/schedule', async (req, res) => {
    try {
        const notification = new Notification(req.body);
        await notification.save();

        const job = cron.schedule('0 9 * * *', () => {
            console.log(`Sending notification: ${notification.message}`);
        }, {
            scheduled: true
        });
        
        res.status(201).json({ message: 'Notification scheduled', jobId: job });
    } catch (error) {
        res.status(400).json({ message: "Error scheduling notification" });
    }
});

// Bulk delete notifications by date
notificationRouter.delete('/batch', async (req, res) => {
    try {
        await Notification.deleteMany({ date: { $lte: req.body.date } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Error deleting notifications" });
    }
});


module.exports = notificationRouter;