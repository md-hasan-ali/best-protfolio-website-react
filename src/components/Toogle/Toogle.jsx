import React from 'react';
import './Toogle.css'
import Mon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Toogle = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const handleClick = () => {
        theme.dispatch({ type: 'toggle' })
    }
    return (
        <div className='toogle' onClick={handleClick}>
            <Mon />
            <Sun />
            <div className="t-button"
                style={darkMode ? { marginLeft: '25px' } : { marginRight: '25px' }}
            >

            </div>
        </div>
    );
};

export default Toogle;