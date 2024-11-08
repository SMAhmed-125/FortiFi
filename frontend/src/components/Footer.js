import React from 'react';

const footerStyles = {
    fontFamily: 'Montserrat',
    fontWeight: '200',
    fontSize: '20px',
    width: '100%',
    padding: '20px',
    backgroundColor: '#24254A', 
    color: '#FFFFFF',
    textAlign: 'center',
};

function Footer() {
    return (
        <footer className="footer" style={footerStyles}>
            <p>&copy; 2024 FortiFi. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;