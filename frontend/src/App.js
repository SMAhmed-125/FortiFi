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
        fontFamily: 'Trebuchet MS, sans-serif',
        backgroundColor: '#2D3142', 
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

    const headerFooterStyles = {
        width: '100%',
        padding: '20px',
        backgroundColor: '#2D3142', 
        color: '#FFFFFF',
        textAlign: 'center',
    };

    const navBarStyles = {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#4F5D75',
      padding: '10px 0',
      width: '100%',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      color: '#FFFFFF',
  };

    return (
        <div style={appStyles}>
            <Router>
                <header style={headerFooterStyles}>
                    <Header />
                </header>
                
                <div style={navBarStyles}>
                    <NavBar />
                </div>
                
                <div style={contentStyles}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/budget" element={<Budget />} />
                        <Route path="/goals" element={<Goals />} />
                        <Route path="/transactions" element={<Transactions />} />
                        <Route path="/savings-plan" element={<SavingsPlan />} />
                        <Route path="/notifications" element={<Notifications />} />
                    </Routes>
                </div>
                
                <footer style={headerFooterStyles}>
                    <Footer />
                </footer>
            </Router>
        </div>
    );
}

export default App;


