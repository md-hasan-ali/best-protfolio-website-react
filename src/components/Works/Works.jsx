import React from 'react';
import './works.css'
import fiverIcon from '../../img/fiverr.png'
import upworkIcon from '../../img/Upwork.png'
import amazonIcon from '../../img/amazon.png'
import shopifyIcon from '../../img/Shopify.png'
import facebookIcon from '../../img/Facebook.png'

const Works = () => {
    return (
        <div className='works'>
            <div className="awesome">
                <span>My Awesome Works</span>
                <span>Brand & Clients</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum <br /> dolor sit amet consectetur, adipisicing elit. Blanditiis, reiciendis. Omnis, nulla!</span>
                <button className="i-button button">
                    Hire Me
                </button>
                <div className="blur s-blur1"></div>
            </div>
            {/* Work Right Area */}
            <div className="w-right-">
                <div className="w-maincircle">
                    <div className="w-seccircle">
                        <img src={fiverIcon} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={amazonIcon} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={shopifyIcon} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={upworkIcon} alt="" />
                    </div>
                    <div className="w-seccircle">
                        <img src={facebookIcon} alt="" />
                    </div>
                </div>
                <div className="w-backcircle blueCircle"></div>
                <div className="w-backcircle yellowCircle"></div>
            </div>
        </div>
    );
};

export default Works;