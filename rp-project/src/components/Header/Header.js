// containers deca logo, about deca page, "abf-ib," and contact/tech support page

import React from 'react';
import './Header.css'; // Import the CSS file

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo-container">
                <img src="/decaImg.png" alt="Logo" className="header-logo" />
            </div>
            <nav className="header-nav">
                <a href="home" className="header-link" style={{ color: "#F5585E" }}>Home</a>
                <a href="about" className="header-link" style={{ color: "#FFC551" }}>About</a>
                <a href="contact" className="header-link" style={{ color: "#00984D" }}>Contact</a>
            </nav>
        </header>
    );
}
