import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Budget from './pages/Budget';
import Goals from './pages/Goals';
import Transactions from './pages/Transactions';
import SavingsPlan from './pages/SavingsPlan';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Dashboard} />
        <Route path="/budget" component={Budget} />
        <Route path="/goals" component={Goals} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/savings" component={SavingsPlan} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/profile" component={Profile} />
      </Routes>
    </Router>
  );
}

export default App;

