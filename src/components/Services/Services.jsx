import React from 'react';
import './services.css'
import heartImoje from '../../img/heartemoji.png'
import Card from '../Card/Card';
import resume from './Md_Hasan_Ali_Resume.pdf'
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Services = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className='services'>
            {/* Left Side  */}
            <div className="awesome">
                <span style={{
                    background: darkMode ? 'black' : '',
                    color: darkMode ? 'white' : ''
                }}>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum <br /> dolor sit amet consectetur, adipisicing elit. Blanditiis, reiciendis. Omnis, nulla!</span>
                <a href={resume} download>
                    <button className="button s-button">Download Resume!</button>
                </a>
                <div className="blur s-blur1"></div>
            </div>

            {/* Right Side */}
            <div className='cards'>
                <div style={{ left: "15rem" }}>
                    <Card
                        imoji={heartImoje}
                        headding={"Web Design"}
                        description={"HTML5, CSS3, Bootstrap, JavaScript"}
                    />
                </div>
                <div style={{ left: "0rem", top: "12rem" }}>
                    <Card
                        imoji={heartImoje}
                        headding={"Web Develoment"}
                        description={"React Js, NodeJs, Mongodb, Express.Js, Firebase"}
                    />
                </div>
                <div style={{ left: "15rem", top: "20rem" }}>
                    <Card
                        imoji={heartImoje}
                        headding={"Advance Concept"}
                        description={"Redux, TypeScript, Context Api"}
                    />
                </div>
                <div className="blur s-blur2" style={{ background: "rgb(238, 210, 255)" }}></div>
            </div>
        </div>
    );
};

export default Services;