import React from 'react';
import TransactionList from '../components/lists/TransactionList';
import TransactionHistoryChart from '../components/charts/TransactionHistoryChart';

function Transactions() {
    return (
        <div className="transactions-page">
            <h2>Transactions</h2>
            <TransactionList />
            <TransactionHistoryChart />
        </div>
    );
}

export default Transactions;
