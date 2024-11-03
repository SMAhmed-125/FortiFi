import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-link" activeClassName="active-link" exact>
                Dashboard
            </NavLink>
            <NavLink to="/budget" className="nav-link" activeClassName="active-link">
                Budget
            </NavLink>
            <NavLink to="/goals" className="nav-link" activeClassName="active-link">
                Goals
            </NavLink>
            <NavLink to="/transactions" className="nav-link" activeClassName="active-link">
                Transactions
            </NavLink>
            <NavLink to="/savings-plan" className="nav-link" activeClassName="active-link">
                Savings Plan
            </NavLink>
            <NavLink to="/notifications" className="nav-link" activeClassName="active-link">
                Notifications
            </NavLink>
            <NavLink to="/profile" className="nav-link" activeClassName="active-link">
                Profile
            </NavLink>
        </nav>
    );
}

export default NavBar;
