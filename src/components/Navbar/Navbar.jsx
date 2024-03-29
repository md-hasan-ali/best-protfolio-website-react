import React from 'react';
import Toogle from '../Toogle/Toogle';
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-wrapper'>
            <div className="n-left">
                <div className="n-name">
                    Momtaz Rasel
                </div>
                <Toogle></Toogle>
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