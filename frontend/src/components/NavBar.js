import React from 'react';
import { NavLink } from 'react-router-dom';
const navBarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#24254A',
    boxSizing: 'border-box',
    margin: '0',
    padding: '10px 10px 10px 10px',
    width: '100%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    color: '#FFFFFF',
};

const navBarLinksStyles = {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '16px',
    color: '',
    padding:'10px 10px 10px 10px',
    display: 'inline-block',
    transition: 'all 0.3s ease 0s',
    cursor: 'pointer',
};

const handleMouseEnter = (e) => {
    e.target.style.color = '#19051d';
}

const handleMouseLeave = (e) => {
    e.target.style.color = '#FFFFFF';
}

function NavBar() {

    return (
        <nav className="navbar" style={navBarStyles}>
            <NavLink to="/" className="nav-link" exact="true" 
            style={navBarLinksStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                Dashboard 
            </NavLink>
            <NavLink to="/budgets" className="nav-link"
            style={navBarLinksStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                Budget 
            </NavLink>
            <NavLink to="/goals" className="nav-link" 
            style={navBarLinksStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                Goals 
            </NavLink>
            <NavLink to="/transactions" className="nav-link" 
            style={navBarLinksStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                Transactions 
            </NavLink>
            <NavLink to="/savings" className="nav-link" 
            style={navBarLinksStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                Savings Plan 
            </NavLink>
            <NavLink to="/notifications" className="nav-link" 
            style={navBarLinksStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                Notifications 
            </NavLink>
        </nav>
    );
}

export default NavBar;
