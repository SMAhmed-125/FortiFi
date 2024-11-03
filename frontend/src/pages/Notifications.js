import React, { useState, useEffect } from 'react';
import NotificationList from '../components/lists/NotificationList';
import { getNotificationById } from '../services/notificationApi';

function Notifications() {
    const [notifications, setNotifications] = useState(null);
    const userId = '67278ae93ac9109a110d8190'; 

    useEffect(() => {
        async function fetchNotifications() {
            try {
                const response = await getNotificationById(userId);
                setNotifications(response.data);
            } catch (error) {
                console.error("Error fetching notifications data:", error);
            }
        }
        fetchNotifications();
    }, []);

    if (!notifications) return <div>Loading...</div>;

    return (
        <div className="notifications-page">
            <h2>Notifications</h2>
            <NotificationList data={notifications} />
        </div>
    );
}

export default Notifications;
