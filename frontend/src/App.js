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

function App() {
    const appStyles = {
        fontFamily: 'Montserrat',
        backgroundColor: '#24254A', 
        color: '#FFFFFF', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const contentStyles = {
        width: '100%',
        maxWidth: '1200px',
        padding: '20px',
        flex: '1',
    };


    return (
        <div style={appStyles}>
            <Router>
                <header>
                    <Header />
                </header>
                
                <div>
                    <NavBar />
                </div>
                
                <div style={contentStyles}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/budgets" element={<Budget />} />
                        <Route path="/goals" element={<Goals />} />
                        <Route path="/transactions" element={<Transactions />} />
                        <Route path="/savings" element={<SavingsPlan />} />
                        <Route path="/notifications" element={<Notifications />} />
                    </Routes>
                </div>
                
                <footer>
                    <Footer />
                </footer>
            </Router>
        </div>
    );
}

export default App;


