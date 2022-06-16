import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-wrapper'>
            <div className="n-left">
                <div className="n-name">
                    Hasan Ali
                </div>
                <span>Toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Protfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <div className="button">
                    Contact!
                </div>
            </div>
        </div>
    );
};

export default Navbar;