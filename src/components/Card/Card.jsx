import React from 'react';
import './card.css'

const Card = ({ imoji, headding, description }) => {
    return (
        <div className='card'>
            <img src={imoji} alt="" />
            <span>{headding}</span>
            <span>{description}</span>
            <button className="c-button button-86">Learn More!</button>
        </div>
    );
};

export default Card;