import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-link" exact="true">
                Dashboard
            </NavLink>
            <NavLink to="/budgets" className="nav-link">
                Budget
            </NavLink>
            <NavLink to="/goals" className="nav-link">
                Goals
            </NavLink>
            <NavLink to="/transactions" className="nav-link">
                Transactions
            </NavLink>
            <NavLink to="/savings" className="nav-link">
                Savings Plan
            </NavLink>
            <NavLink to="/notifications" className="nav-link">
                Notifications
            </NavLink>
        </nav>
    );
}

export default NavBar;
