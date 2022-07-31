import React from 'react';
import './card.css'
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Card = ({ imoji, headding, description }) => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className='card'>
            <img src={imoji} alt="" />
            <span style={{
                background: darkMode ? '' : '',
                color: darkMode ? 'black' : ''
            }}>{headding}</span>
            <span>{description}</span>
            <button className="c-button button-86">Learn More!</button>
        </div>
    );
};

export default Card;