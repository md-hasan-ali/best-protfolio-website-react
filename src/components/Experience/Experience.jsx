import React from 'react';
import './experienc.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Experience = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.dispatch.darkMode
    return (
        <div className='experience'>
            <div className="achivement">
                <div style={{
                    background: darkMode ? 'black' : '',
                    color: darkMode ? 'white' : ''
                }} className="circle">1+</div>
                <span>Years</span>
                <span>Experience</span>
            </div>
            <div className="achivement">
                <div style={{
                    background: darkMode ? 'black' : '',
                    color: darkMode ? 'white' : ''
                }} className="circle">20+</div>
                <span>Peojects</span>
                <span>Completed</span>
            </div>
            <div className="achivement">
                <div style={{
                    background: darkMode ? 'black' : '',
                    color: darkMode ? 'white' : ''
                }} className="circle">4+</div>
                <span>Automation</span>
                <span>Engineer</span>
            </div>
            <div className="achivement">
                <div style={{
                    background: darkMode ? 'black' : '',
                    color: darkMode ? 'white' : ''
                }} className="circle">2+</div>
                <span>Software</span>
                <span>Company</span>
            </div>
        </div>
    );
};

export default Experience;