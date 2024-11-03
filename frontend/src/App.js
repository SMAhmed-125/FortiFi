import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
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
            <Header />
            <NavBar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/budget" element={<Budget />} />
                    <Route path="/goals" element={<Goals />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/savings-plan" element={<SavingsPlan />} />
                    <Route path="/notifications" element={<Notifications />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;


