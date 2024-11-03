import React, { useEffect, useState } from 'react';
import { getUserById } from '../../services/userApi';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUserById();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            {users.length > 0 ? (
                users.map(user => (
                    <div key={user._id} className="user-item">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Password:</strong> {user.passwordHash}</p>
                        <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
                    </div>
                ))
            ) : (
                <p>No users found</p>
            )}
        </div>
    );
}

export default UserList;
