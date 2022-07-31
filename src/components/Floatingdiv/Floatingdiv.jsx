import React from 'react';
import './floatingdiv.css'
import { useContext } from "react"
import { themeContext } from '../../Context';

const Floatingdiv = ({ image, text1, text2 }) => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className='Floatingdiv' style={{
            background: darkMode ? 'black' : '',
            color: darkMode ? 'white' : '',
            border: darkMode ? '1px solid yellow' : ''
        }}>
            <img src={image} alt="" />
            <span>
                {text1} <br /> {text2}
            </span>
        </div>
    );
};

export default Floatingdiv;