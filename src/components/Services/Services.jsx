import React from 'react';
import './services.css'

const Services = () => {
    return (
        <div className='services'>
            {/* Left Side  */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum <br /> dolor sit amet consectetur, adipisicing elit. Blanditiis, reiciendis. Omnis, nulla!</span>
                <button className="button s-button">Download Resume!</button>
                <div className="blur"></div>
            </div>

            {/* Right Side */}
            <div>
                I am Right Side
            </div>
        </div>
    );
};

export default Services;