import React, { useState, useEffect } from 'react';
import TransactionList from '../components/lists/TransactionList';
import TransactionHistoryChart from '../components/charts/TransactionHistoryChart';
import { getTransactionById, getTransactionByUserIdAndGoalId } from '../services/transactionApi';

function Transactions() {
    const [transactionHistory, setTransactionHistory] = useState(null);
    const userId = '67278ae93ac9109a110d8190'; 

    useEffect(() => {
        async function fetchTransactions() {
            try {
                const response = await getTransactionByUserId(userId);
                setTransactionHistory(response.data);
            } catch (error) {
                console.error("Error fetching transaction history:", error);
            }
        }
        fetchTransactions();
    }, []);

    if (!transactionHistory) return <div>Loading...</div>;

    return (
        <div className="transactions-page">
            <h2>Transactions</h2>
            <TransactionList data={transactionHistory} />
            <TransactionHistoryChart data={transactionHistory} />
        </div>
    );
}

export default Transactions;

