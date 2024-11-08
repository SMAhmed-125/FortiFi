import React from 'react';

const headerStyles = {
    fontFamily: 'Montserrat',
    fontWeight: '200',
    fontSize: '20px',
    width: '100%',
    padding: '20px',
    backgroundColor: '#24254A', 
    color: '#FFFFFF',
    textAlign: 'center',
};

function Header() {
    return (
        <header className="header" style={headerStyles}>
            <h1>FortiFi</h1>
        </header>
    );
}

export default Header;
