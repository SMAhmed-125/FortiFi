import React, { useEffect, useState } from 'react';
import { getTransactionByUserIdAndGoalId } from '../../services/transactionApi';

function TransactionList() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const data = await getTransactionByUserIdAndGoalId();
                setTransactions(data);
            } catch (error) {
                console.error("Error fetching transactions:", error);
            }
        };
        fetchTransactions();
    }, []);

    return (
        <div>
            <h2>Transaction List</h2>
            {transactions.length > 0 ? (
                transactions.map(transaction => (
                    <div key={transaction._id} className="transaction-item">
                        <p><strong>Goal ID:</strong> {transaction.goalId}</p>
                        <p><strong>User ID:</strong> {transaction.userId}</p>
                        <p><strong>Amount:</strong> ${transaction.amount}</p>
                        <p><strong>Type:</strong> {transaction.transactionType}</p>
                        <p><strong>Date:</strong> {new Date(transaction.date).toLocaleDateString()}</p>
                        <p><strong>Description:</strong> {transaction.description}</p>
                    </div>
                ))
            ) : (
                <p>No transactions found</p>
            )}
        </div>
    );
}

export default TransactionList;

