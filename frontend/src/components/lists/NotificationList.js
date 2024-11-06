import React, { useEffect, useState } from 'react';
import { getNotificationsByUserIdAndGoalId } from '../../services/notificationApi';

function NotificationList() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const data = await getNotificationsByUserIdAndGoalId();
                setNotifications(data);
            } catch (error) {
                console.error("Error fetching notifications:", error);
            }
        };
        fetchNotifications();
    }, []);

    return (
        <div>
            <h2>Notification List</h2>
            {notifications.length > 0 ? (
                notifications.map(notification => (
                    <div key={notification._id} className="notification-item">
                        <p><strong>Type:</strong> {notification.notificationType}</p>
                        <p><strong>Scheduled Date:</strong> {new Date(notification.dateScheduled).toLocaleDateString()}</p>
                        <p><strong>Message:</strong> {notification.message || 'No message provided'}</p>
                    </div>
                ))
            ) : (
                <p>No notifications found</p>
            )}
        </div>
    );
}

export default NotificationList;

